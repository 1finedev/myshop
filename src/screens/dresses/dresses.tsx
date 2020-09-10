import React from 'react';
import {View, Text} from 'react-native';
import {DressesScreenProps} from '../../navigation';

const Dresses: React.FC<DressesScreenProps> = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Dresses</Text>
    </View>
  );
};

export default Dresses;
