import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, Image, ScrollView, View } from 'react-native';

import { Header, ItemList, Separator, Typography } from '../../components';
import styles from './styles';
import NetInfo from "@react-native-community/netinfo";

import { colors } from '../../utils/theme';
import { getAllCharacters, getCharacterById } from '../../services/characters';

const flatlistKeyExtractor = (item: Character) => `${item.id}`;

// @ts-ignore
const CharacterDetailScreen = ({ route }) => {
  const [characters, setBooks] = useState<Character[]>([]);
  const [character, setCharacter] = useState<Character>();
  const [loading, setLoading] = useState(true);

  const { id, title } = route.params;
  const isConnected = NetInfo.isConnected;

  const getCharactersData = async () => {
    setLoading(true);
    try {
        const { success, data } = await getAllCharacters();
        if (success) {
            const filterBooks = data.filter((character: Character) => character.name !== title);
            setBooks(filterBooks);
        } else {
            Alert.alert('Error getting characters on Character Detail Screen');
        }
    } catch (error) {
        console.log('Error getting characters on Character Detail', error);
        Alert.alert('Error getting characters on Character Detail');
    } finally {
        setLoading(false);
    }
  }

  const getCharacterData = async () => {
      setLoading(true);
      try {
          const { success, data } = await getCharacterById(id);
          if (success) {
            setCharacter(data[0]);
          } else {
              Alert.alert('Error getting character on Character Detail Screen');
          }
      } catch (error) {
          console.log('Error getting character on Character Detail Screen', error);
          Alert.alert('Error getting character on Character Detail Screen');
      } finally {
          setLoading(false);
      }
  }

    useEffect(() => {
        getCharacterData();
        getCharactersData();
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
              (character) ? (
                <View style={styles.detailContainer}>
                  <View style={styles.bookCover}>
                    <Image resizeMode='contain'
                      style={styles.image}
                      source={{ uri: 'https://fortheloveofharry.com/wp-content/uploads/2019/08/Chocolate-Frog-Box-New-Release-1.png' }} />
                  </View>
                  <View style={styles.bookDetail}>
                    <Typography size={12} variant='regular'>Name: {character.name}</Typography>
                    <Separator size={5} />
                    <Typography size={12} variant='regular'>Birth: {character.birth}</Typography>
                    <Separator size={5} />
                    <Typography size={12} variant='regular'>Death: {character.death || 'none'}</Typography>
                    <Separator size={5} />
                    <Typography size={12} variant='regular'>Species: {character.species || 'none'}</Typography>
                    <Separator size={5} />
                    <Typography size={12} variant='regular'>Ancestry: {character.ancestry || 'none'}</Typography>
                    <Separator size={5} />
                    <Typography size={12} variant='regular'>Gender: {character.gender || 'none'}</Typography>
                    <Separator size={5} />
                    <Typography size={12} variant='regular'>Hair Color: {character.hair_color || 'none'}</Typography>
                    <Separator size={5} />
                    <Typography size={12} variant='regular'>Eye Color: {character.eye_color || 'none'}</Typography>
                    <Separator size={5} />
                    <Typography size={12} variant='regular'>Wand: {character.wand || 'none'}</Typography>
                    <Separator size={5} />
                    <Typography size={12} variant='regular'>Patronus: {character.patronus || 'none'}</Typography>
                    <Separator size={5} />
                    <Typography size={12} variant='regular'>House: {character.house || 'none'}</Typography>
                    <Separator size={5} />
                  </View>
                </View>
              ) : null
            }
            
            <View style={styles.sinopsisContainer}>
              <Typography color={colors.black} size={12} variant='regular'>Sinopsis?: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent venenatis porttitor orci at pellentesque. Donec odio elit, placerat in nibh quis, mattis varius felis. Cras fermentum odio ut lectus suscipit accumsan. Nam volutpat massa sagittis nunc consectetur, sit amet placerat enim vulputate. Donec tempus ipsum nibh, sed aliquet mauris bibendum at.</Typography>
            </View>
            <Separator size={15} />
            <View style={styles.otherBooksContainer}>
              <Typography color={colors.black} size={16} variant='bold'>Other Characters:</Typography>
              <ItemList items={characters} getItemsData={getCharactersData} loading={loading}
              itemResizeMode='contain' isHorizontal={true} 
              itemDetailScreen='CharacterDetail' itemSize='small' />
            </View>
          </View>
        </View>
      </ScrollView>
      </>
    );
  }
};

export default CharacterDetailScreen;
