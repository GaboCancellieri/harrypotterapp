import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, FlatList, Image, SafeAreaView, ScrollView, TouchableOpacity, View } from 'react-native';

import { Header, ItemList, Separator, Typography } from '../../components';
import styles from './styles';
import NetInfo from "@react-native-community/netinfo";

import { colors } from '../../utils/theme';
import { getAllBooks, getBookById } from '../../services';
import { goToScreen } from '../../navigation/controls';

const ListItem = ({ id, title, bookCover }: {id: number, title: string, bookCover: BookCover}) => (
  <TouchableOpacity 
      onPress={() => goToScreen('BookDetail', { id, title })}
      style={styles.listItemContainerShadow}>
      <View style={styles.listItemContainer}>
          <Image resizeMode='cover'
              style={styles.imageBooks} 
              source={{uri: bookCover.URL}}
            />
          <Separator size={10} />
          <Typography numberOfLines={2} size={8} align='center'>{title}</Typography>
          <Separator size={10} />
      </View>
  </TouchableOpacity>
)

const flatlistKeyExtractor = (item: Book) => `${item.id}`;

const renderFlatListItem = ({ item }: { item: Book }) => {
  return (
    <ListItem id={ item.id } title={ item.title } bookCover={ item.book_covers[0]}/>
  );
}

// @ts-ignore
const BookDetailScreen = ({ route }) => {
  const [books, setBooks] = useState<Book[]>([]);
  const [book, setBook] = useState<Book>();
  const [loading, setLoading] = useState(true);

  const { id, title } = route.params;
  const isConnected = NetInfo.isConnected;

  const getBooksData = async () => {
    setLoading(true);
    try {
        const { success, data } = await getAllBooks();
        if (success) {
            const filterBooks = data.filter((book: Book) => book.title !== title);
            setBooks(filterBooks);
        } else {
            Alert.alert('Error getting books on Books Screen');
        }
    } catch (error) {
        console.log('Error getting books on Books Screen', error);
        Alert.alert('Error getting books on Books Screen');
    } finally {
        setLoading(false);
    }
  }

  const getBookData = async () => {
      setLoading(true);
      try {
          const { success, data } = await getBookById(id);
          if (success) {
              setBook(data[0]);
          } else {
              Alert.alert('Error getting book on Book Detail Screen');
          }
      } catch (error) {
          console.log('Error getting book on Book Detail Screen', error);
          Alert.alert('Error getting book on Book Detail Screen');
      } finally {
          setLoading(false);
      }
  }

    useEffect(() => {
        getBookData();
        getBooksData();
    }, [id]);

  if (!isConnected) {
    return (
        <View style={{ alignItems: 'center', flex: 1, justifyContent: 'center', width: '100%', }}>
            <Typography>No tienes Internet :(</Typography>
        </View>
    );
  }

  if (loading) {
    return (
      <>
        <Header title={title} isImageHeader={true} />
        <Separator size={15} />
        <View style={{ alignItems: 'center', flex: 1, width: '100%', }}>
          <View style={{ alignItems: 'center', flex: 1, justifyContent: 'center', width: '100%', }}>
            <ActivityIndicator size="large" color={ colors.mainOrange }></ActivityIndicator>
          </View>
        </View>
      </>
    );
  } else {
    return (
      <>
      <Header title='BookDetail' isImageHeader={true} />
      <ScrollView style={{ flex: 1, width: '100%' }}>
        <Separator size={15} />
        <View style={styles.mainContainer}>
          <Separator size={15} />
          <View style={styles.titleContent}>
            <Typography align='center' color={colors.griffindorRed} size={25} variant='bold'>{title}</Typography>
          </View>
          <Separator size={30} />
          <View style={styles.container}>
            {
              (book) ? (
                <View style={styles.detailContainer}>
                  <View style={styles.bookCover}>
                    <Image resizeMode='cover'
                      style={styles.image}
                      source={{ uri: book.book_covers[0].URL}} />
                  </View>
                  <View style={styles.bookDetail}>
                    <Typography size={12} variant='regular'>Author: {book.author}</Typography>
                    <Separator size={15} />
                    <Typography size={12} variant='regular'>Publish Date: {book.publish_date[0].UK}</Typography>
                    <Separator size={15} />
                    <Typography size={12} variant='regular'>Plot Take-place years: {book.plot_take_place_years[0]} - {book.plot_take_place_years[1]}</Typography>
                  </View>
                </View>
              ) : null
            }
            
            <View style={styles.sinopsisContainer}>
              <Typography color={colors.black} size={12} variant='regular'>Sinopsis?: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent venenatis porttitor orci at pellentesque. Donec odio elit, placerat in nibh quis, mattis varius felis. Cras fermentum odio ut lectus suscipit accumsan. Nam volutpat massa sagittis nunc consectetur, sit amet placerat enim vulputate. Donec tempus ipsum nibh, sed aliquet mauris bibendum at.</Typography>
            </View>
            <Separator size={15} />
            <View style={styles.otherBooksContainer}>
              <Typography color={colors.black} size={16} variant='bold'>Other Books:</Typography>
              <ItemList items={books} getItemsData={getBooksData} loading={loading} isHorizontal={true} 
              itemResizeMode='cover' itemDetailScreen='BookDetail' itemSize='small'/>
            </View>
          </View>
        </View>
      </ScrollView>
      </>
    );
  }
};

export default BookDetailScreen;
