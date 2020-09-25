import React from 'react';
import {View, Text} from 'react-native';
import styles from './categories-list.styles';
import {Category} from '../../../api';

interface CategoryBoxProps {
  category: Category;
}

const CategoryBox: React.FC<CategoryBoxProps> = ({category}) => {
  const {name} = category;
  return (
    <View style={styles.categoryBoxContainer}>
      <Text style={styles.categoryBoxTitle}>{name}</Text>
    </View>
  );
};

export default CategoryBox;
