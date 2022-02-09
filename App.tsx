import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';

import { Provider } from 'react-redux';
import store from './store/store';

import { SneakzNavigator } from './navigation/StackNavigator';

const fetchFonts = () => {
  return Font.loadAsync({
    'supermercado': require('./assets/fonts/SupermercadoOne-Regular.ttf'),
    'asap-regular': require('./assets/fonts/AsapCondensed-Regular.ttf'),
    'asap-bold': require('./assets/fonts/AsapCondensed-Bold.ttf')
  });
}

export default function App() {
  const [assestsLoaded, setAssetsLoaded] = useState(false);

  if(!assestsLoaded) {
    return <AppLoading 
              startAsync={fetchFonts} 
              onFinish={() => {setAssetsLoaded(true)}}
              onError={(err) => console.log(err)}  
            />
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
          <SneakzNavigator />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
