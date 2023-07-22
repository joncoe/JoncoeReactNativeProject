import React from 'react';
import { Text, StyleSheet, FlatList } from 'react-native';
import ColorBox from '../components/ColorBox';

const ColorPalette = ({ route }) => {
  const { paletteName, colors } = route.params;
  console.log(route);
  return (
    <FlatList
      style={styles.container}
      data={colors}
      renderItem={({ item }) => (
        <ColorBox hexCode={item.hexCode} colorName={item.colorName} />
      )}
      ListHeaderComponent={
        <Text style={styles.heading}>
          {paletteName}という色のボックスがあります
        </Text>
      }
      keyExtractor={item => item.hexCode}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
  },
});

export default ColorPalette;
