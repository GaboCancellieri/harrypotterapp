import React from 'react';
const { createBottomTabNavigator } = require('@react-navigation/bottom-tabs');

import { BooksScreen } from '../screens';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name='BooksTab' component={ BooksScreen }/>
        </Tab.Navigator>
    );
};

export default TabNavigator;
