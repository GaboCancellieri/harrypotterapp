import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { BooksScreen, BookDetailScreen } from '../screens';

const Stack = createNativeStackNavigator();

const BookStack = () => (
    <Stack.Navigator initialRouteName='BooksScreen' screenOptions={{ headerShown: false }}>
        <Stack.Screen name="BooksScreen" component={ BooksScreen } />
        <Stack.Screen name="BookDetail" component={ BookDetailScreen } />
    </Stack.Navigator>
);

export default BookStack;
