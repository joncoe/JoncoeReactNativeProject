import React, { useEffect, useCallback, useState } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import PalettePreview from '../components/PalettePreview';

const API_URL = 'https://color-palette-api.kadikraman.now.sh/palettes';

const Home = ({ navigation: { navigate } }) => {
  const [colors, setColors] = useState({});

  const fetchColors = useCallback(async () => {
    const response = await fetch(API_URL);
    if (response.ok) {
      const paletteList = await response.json();
      setColors(paletteList);
    }
  }, []);

  useEffect(() => {
    fetchColors();
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
