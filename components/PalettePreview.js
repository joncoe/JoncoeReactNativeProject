import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  FlatList,
  View,
} from 'react-native';

const PalettePreview = ({ palette, onPress }) => {
  const colorList = palette.colors.slice(0, 5);

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ marginTop: 10, marginBottom: 15 }}>
      <Text style={styles.text}>{palette.paletteName}</Text>
      <FlatList
        data={colorList}
        keyExtractor={item => item.colorName}
        horizontal={true}
        renderItem={({ item }) => {
          return (
            <View
              style={[{ backgroundColor: item.hexCode }, styles.colorBox]}
            />
          );
        }}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 5,
  },
  colorBox: {
    width: 25,
    height: 25,
    margin: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 2,
  },
});

export default PalettePreview;
