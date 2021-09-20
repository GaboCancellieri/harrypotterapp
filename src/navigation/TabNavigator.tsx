import React from 'react';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { colors } from '../utils/theme';
const { createBottomTabNavigator } = require('@react-navigation/bottom-tabs');

import BookStack from './BookStack';
import CharacterStack from './CharacterStack';
import HistoryStack from './HistoryStack';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator screenOptions={{
            tabBarActiveTintColor: "#FFC500",
            tabBarInactiveTintColor: "#F9F9F9",
            tabBarActiveBackgroundColor: "#7F0909",
            tabBarInactiveBackgroundColor: "#7F0909",
            tabBarLabelStyle: {
              fontSize: 10
            },
            tabBarStyle: [
              {
                display: "flex"
              },
              null
            ]
        }} >
            <Tab.Screen name='Books' component={ BookStack } options={{ 
                headerShown: false,
                tabBarIcon: () => <MaterialIcon name="book" size={35} color={colors.griffindorYellow} />
            }}/>
            <Tab.Screen name='Characters' component={ CharacterStack } options={{ 
                headerShown: false,
                tabBarIcon: () => <MaterialIcon name="badge" size={35} color={colors.griffindorYellow} />
            }}/>
            <Tab.Screen name='History' component={ HistoryStack } options={{ 
                headerShown: false,
                tabBarIcon: () => <MaterialIcon name="history" size={35} color={colors.griffindorYellow} />
            }}/>
        </Tab.Navigator>
    );
};

export default TabNavigator;
