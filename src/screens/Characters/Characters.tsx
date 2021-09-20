import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, FlatList, SafeAreaView, View } from 'react-native';

import { Header, ItemList, SearchBar, Separator, Typography } from '../../components';
import styles from './styles';
import NetInfo from "@react-native-community/netinfo";

import { colors } from '../../utils/theme';
import { getAllCharacters } from '../../services/characters';

let filteredCharacters: Character[] = [];

// @ts-ignore
const CharactersScreen = ({ navigation }) => {
  const [characterFilter, setCharacterFilter] = useState<string>('');
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);

  const isConnected = NetInfo.isConnected;

  const onCharacterFilter = (text: string) => {
    filteredCharacters = Object.assign(characters);
    setCharacterFilter(text);
    if (characterFilter !== '') {
      filteredCharacters = filteredCharacters.filter((character: Character) => character.name.toLowerCase().includes(text.toLowerCase()));
    }
  };

  const getCharactersData = async () => {
      setLoading(true);
      try {
          const { success, data } = await getAllCharacters();
          if (success) {
            setCharacters(data);
            filteredCharacters = data;
          } else {
              Alert.alert('Error getting books on Books Screen');
          }
      } catch (error) {
          console.log('Error getting books on Books Screen', error);
          Alert.alert('Error getting books on Books Screen');
      } finally {
          setLoading(false);
          console.log(characterFilter)
          onCharacterFilter(characterFilter);
      }
  }

  useEffect(() => {
    getCharactersData();
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
      <Header title='Characters' isImageHeader={true} />
      <Separator size={15} />
      <View style={styles.mainContainer}>
        <Separator size={15} />
        <SearchBar placeholder="Search a character" value={characterFilter} onChange={onCharacterFilter}></SearchBar>
        <Separator size={15} />
        <Typography size={25} color={colors.griffindorRed} variant='bold' weight='700'>
          CHARACTERS
        </Typography>
        <Separator size={15} />
        <ItemList items={filteredCharacters} getItemsData={getCharactersData} loading={loading} 
        itemResizeMode='contain' itemDetailScreen={'CharacterDetail'} isHorizontal={false} itemSize='regular' />  
      </View>
      </>
    );
  }
};

export default CharactersScreen;
