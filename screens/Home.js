import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const Home = ({ navigation: { navigate } }) => {
  return (
    <View>
      <TouchableOpacity onPress={() => navigate('ColorPalette')}>
        <Text>ソラリゼーションダーク</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
