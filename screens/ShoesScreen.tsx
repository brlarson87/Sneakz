import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ColorPalette from '../constants/ColorPalette';

const ShoesScreen = () => {
  return (
    <View style={styles.screen}>
        <Text style={{color: ColorPalette.offWhite}}>Shoes Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: ColorPalette.dark
    }
});

export default ShoesScreen