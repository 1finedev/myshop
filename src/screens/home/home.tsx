import React from 'react';
import {View, Text} from 'react-native';
import {HomeScreenProps} from '../../navigation';

const Home: React.FC<HomeScreenProps> = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home</Text>
    </View>
  );
};

export default Home;
