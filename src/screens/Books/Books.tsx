import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, FlatList, Image, SafeAreaView, TouchableOpacity, View } from 'react-native';

import { Header, ItemList, SearchBar, Separator, Typography } from '../../components';
import styles from './styles';
import NetInfo from "@react-native-community/netinfo";

import { colors } from '../../utils/theme';
import { goToScreen } from '../../navigation/controls';
import { getAllBooks } from '../../services';

const ListItem = ({ id, title, bookCover }: {id: number, title: string, bookCover: BookCover}) => (
  <TouchableOpacity 
      onPress={() => goToScreen('BookDetail', { id, title })}
      style={styles.listItemContainerShadow}>
      <View style={styles.listItemContainer}>
          <Image resizeMode='cover'
              style={styles.image} 
              source={{uri: bookCover.URL}}
            />
          <Separator size={10} />
          <Typography numberOfLines={ 2 } size={14} align='center'>{title}</Typography>
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

let filteredBooks: Book[] = [];

// @ts-ignore
const BooksScreen = ({ navigation }) => {
  const [bookFilter, setBookFilter] = useState<string>('');
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);

    const isConnected = NetInfo.isConnected;

    const onBookFilter = (text: string) => {
      filteredBooks = Object.assign(books);
      setBookFilter(text);
      if (text !== '') {
        filteredBooks = books.filter((book: Book) => book.title.toLowerCase().includes(text.toLowerCase()));
      }
    };

    const getBooksData = async () => {
        setLoading(true);
        try {
            const { success, data } = await getAllBooks();
            if (success) {
              setBooks(data);
              filteredBooks = data;
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

    useEffect(() => {
        getBooksData();
    }, []);

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
        <Header title='Books' isImageHeader={true} />
        <Separator size={15} />
        <View style={{ alignItems: 'center', flex: 1, width: '100%', }}>
          <View style={{ alignItems: 'center', flex: 1, justifyContent: 'center', width: '100%', }}>
            <ActivityIndicator size="large" color={ colors.griffindorRed }></ActivityIndicator>
          </View>
        </View>
      </>
    );
  } else {
    return (
      <>
      <Header title='Books' isImageHeader={true} />
      <SafeAreaView style={{ flex: 1, width: '100%' }}>
        <View style={styles.mainContainer}>
          <Separator size={15} />
          <SearchBar placeholder="Search a book" value={bookFilter} onChange={onBookFilter}></SearchBar>
          <Separator size={15} />
          <Typography size={25} color={colors.griffindorRed} variant='bold' weight='700'>
            BOOKS
          </Typography>
          <Separator size={15} />
            <ItemList items={filteredBooks} getItemsData={getBooksData} loading={loading} 
            itemResizeMode='cover' itemDetailScreen={'BookDetail'} isHorizontal={false} itemSize='regular' /> 
        </View>
      </SafeAreaView>
      </>
    );
  }
};

export default BooksScreen;
