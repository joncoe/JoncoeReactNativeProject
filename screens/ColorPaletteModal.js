import React, { useState, useCallback } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Switch,
  FlatList,
} from 'react-native';

import COLORS from '../data/colorList';
import { newColorShade } from '../utils/newColorShade';

const ColorPaletteModal = ({ navigation }) => {
  const [name, setName] = useState('');
  const [selectedColors, setSelectedColors] = useState([]);

  const handleSubmit = useCallback(
    e => {
      if (!name) {
        Alert.alert('❣️ Please enter a Palette Name');
      } else {
        const newColorPalette = {
          paletteName: name,
          colors: [],
        };
        navigation.navigate('Home', { newColorPalette });
      }
    },
    [name],
  );

  const handleUpdate = useCallback(
    (color, newValue) => {
      if (newValue === true) {
        setSelectedColors(current => [...current, color]);
      } else {
        setSelectedColors(current =>
          current.filter(c => c.colorName !== color.colorName),
        );
      }
    },
    [selectedColors, setSelectedColors],
  );

  return (
    <View style={styles.container}>
      <Text style={styles.name}>Color Palette Name</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={text => setName(text)}
        placeholder="Palette Name"
      />
      <FlatList
        data={COLORS}
        keyExtractor={item => item.colorName}
        renderItem={({ item }) => (
          <View style={styles.color}>
            <Text>{item.colorName}</Text>
            <Switch
              value={
                !!selectedColors.find(
                  color => color.colorName === item.colorName,
                )
              }
              onValueChange={newValue => handleUpdate(item, newValue)}
              trackColor={{
                false: newColorShade(item.hexCode, -50),
                true: item.hexCode,
              }}
              ios_backgroundColor={{
                false: newColorShade(item.hexCode, -50),
                true: item.hexCode,
              }}
              thumbColor={
                false ? item.hexCode : newColorShade(item.hexCode, -50)
              }
            />
          </View>
        )}
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: 'grey',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  container: {
    padding: 10,
    paddingTop: 15,
    backgroundColor: 'white',
    flex: 1,
  },
  button: {
    height: 40,
    backgroundColor: 'teal',
    borderRadius: 19,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  name: {
    marginBottom: 10,
  },
  color: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default ColorPaletteModal;
