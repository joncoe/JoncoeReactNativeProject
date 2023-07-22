import React, { useEffect, useCallback, useState } from 'react';
import { StyleSheet, FlatList, RefreshControl } from 'react-native';
import PalettePreview from '../components/PalettePreview';

const API_URL = 'https://color-palette-api.kadikraman.now.sh/palettes';

const Home = ({ navigation: { navigate } }) => {
  const [colors, setColors] = useState({});
  const [isRefreshing, setIsRefreshing] = useState(false);

  const fetchColors = useCallback(async () => {
    const response = await fetch(API_URL);
    if (response.ok) {
      const paletteList = await response.json();
      setColors(paletteList);
    }
  }, []);

  useEffect(() => {
    fetchColors();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleRefresh = useCallback(async () => {
    setIsRefreshing(true);
    await fetchColors();
    // the API call is very fast. Add a minimum for better UX
    setTimeout(() => {
      setIsRefreshing(false);
    }, 800);
  });

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
      refreshControl={
        <RefreshControl refreshing={isRefreshing} onRefresh={handleRefresh} />
      }
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
