import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ColorBox = props => {
  const colorStyle = {
    backgroundColor: props.hexCode,
  };
  return (
    <View style={[colorStyle, styles.box]}>
      <Text style={[styles.text]}>
        {props.colorName} {props.hexCode}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    color: 'white',
  },
  box: {
    padding: 10,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
});

export default ColorBox;
