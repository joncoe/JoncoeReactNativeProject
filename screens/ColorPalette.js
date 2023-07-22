import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, FlatList } from 'react-native';
import ColorBox from '../components/ColorBox';

const ColorPalette = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <FlatList
          data={COLORS}
          renderItem={({ item }) => (
            <ColorBox hexCode={item.hexCode} colorName={item.colorName} />
          )}
          ListHeaderComponent={
            <Text style={styles.heading}>
              Here are some boxes of different colours
            </Text>
          }
          keyExtractor={item => item.hexCode}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 10,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
  },
});

export default ColorPalette;
