import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { CharacterDetailScreen, CharactersScreen } from '../screens';

const Stack = createNativeStackNavigator();

const CharacterStack = () => (
    <Stack.Navigator initialRouteName='CharactersScreen' screenOptions={{ headerShown: false }}>
        <Stack.Screen name="CharactersScreen" component={ CharactersScreen } />
        <Stack.Screen name="CharacterDetail" component={ CharacterDetailScreen } />
    </Stack.Navigator>
);

export default CharacterStack;
