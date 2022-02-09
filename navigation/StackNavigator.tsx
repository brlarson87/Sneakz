import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ColorPalette from '../constants/ColorPalette';
import ShoesScreen from '../screens/ShoesScreen';

const Stack = createNativeStackNavigator();

const screenOptions = {
    headerStyle: {
        backgroundColor: ColorPalette.primaryColor
    },
    headerTitleStyle: {
        color: ColorPalette.offWhite,
        fontSize: 36,
        fontFamily: 'supermercado'
    }
}

export const SneakzNavigator = () => {
    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen name="Sneakz" component={ShoesScreen}/>
        </Stack.Navigator>
    )
}