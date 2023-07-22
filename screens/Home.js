import React, { useEffect, useCallback, useState } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import PalettePreview from '../components/PalettePreview';

const Home = ({ navigation: { navigate } }) => {
  const [colors, setColors] = useState({});

  const getColors = useCallback(async () => {
    const response = await fetch(
      'https://color-palette-api.kadikraman.now.sh/palettes',
    );
    const colors = await response.json();
    if (response.ok) {
      setColors(colors);
    }
  });

  useEffect(() => {
    getColors();
  }, []);

  return (
    <FlatList
      style={styles.list}
      data={colors}
      keyExtractor={item => item.paletteName}
      renderItem={({ item }) => (
        <PalettePreview
          onPress={() => navigate('ColorPalette', item)}
          palette={item}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    padding: 20,
    backgroundColor: 'white',
  },
});

export default Home;
