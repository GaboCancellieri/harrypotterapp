import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HistoryScreen } from '../screens';

const Stack = createNativeStackNavigator();

const HistoryStack = () => (
    <Stack.Navigator initialRouteName='HistoryScreen' screenOptions={{ headerShown: false }}>
        <Stack.Screen name="HistoryScreen" component={ HistoryScreen } />
    </Stack.Navigator>
);

export default HistoryStack;
