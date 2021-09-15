/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

 import React from 'react';
 const { NavigationContainer } = require('@react-navigation/native');
 
 import MainNavigator from './src/navigation/MainNavigator';
 import { navigationRef } from './src/navigation/controls';

 import Config from 'react-native-config';
 import { SafeAreaProvider } from 'react-native-safe-area-context';
 
 const App = () => {
   console.log(Config.API_URL)
   return  (
     <SafeAreaProvider>
       <NavigationContainer ref={ navigationRef }>
         <MainNavigator />
       </NavigationContainer>
     </SafeAreaProvider>
   )
 };
 
 export default App;
 