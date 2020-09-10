import React from 'react';
import {View, Text} from 'react-native';
import {ShopHomeScreenProps} from '../../navigation';

const ShopHome: React.FC<ShopHomeScreenProps> = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Shop Home</Text>
    </View>
  );
};

export default ShopHome;
