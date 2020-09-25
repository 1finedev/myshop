import React from 'react';
import {View, Text} from 'react-native';
import {HomeScreenProps} from '../../navigation';
import {useGetIsLoading} from '../../redux';
import {CategoriesList} from './categories-list';

const Home: React.FC<HomeScreenProps> = () => {
  const isLoading = useGetIsLoading();
  return (
    <>
      {isLoading ? null : (
        <View style={{flex: 1}}>
          <CategoriesList />
          <Text>Home</Text>
        </View>
      )}
    </>
  );
};

export default Home;
