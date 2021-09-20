import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AuthStack from './AuthStack';
import TabNavigator from './TabNavigator';
import BookDetailScreen from '../screens/BookDetail';

const Stack = createNativeStackNavigator();

const MainNavigator = () => (
    <Stack.Navigator initialRouteName="AuthStack" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="AuthStack" component={ AuthStack } />
        <Stack.Screen name="TabNavigator" component={ TabNavigator } />
        {/* <Stack.Screen name="BookDetail" component={ BookDetailScreen } /> */}
    </Stack.Navigator>
);

export default MainNavigator;
