import React from 'react';
import {FlatList, View} from 'react-native';
import {useGetCategories} from '../../../redux';
import Category from './category';

const CategoriesList: React.FC = () => {
  const categories = useGetCategories();
  return (
    <View>
      <FlatList
        horizontal
        data={categories}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => <Category category={item} />}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default CategoriesList;
