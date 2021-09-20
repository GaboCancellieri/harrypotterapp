import React from 'react';

const { createNativeStackNavigator } = require('@react-navigation/native-stack');

import { WelcomeScreen } from '../screens';
import BookDetailScreen from '../screens/BookDetail';

const Stack = createNativeStackNavigator();

const AuthStack = () => (
    <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={ WelcomeScreen } options={{ headerShown: false }}/>
    </Stack.Navigator>
);

export default AuthStack;
