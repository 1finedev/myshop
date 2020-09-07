import React from 'react';
import {Image} from 'react-native';
import styles from './splash-screen.styles';

export const SplashScreen: React.FC = () => {
  return (
    <Image
      style={styles.img}
      source={require('../../assets/images/splash_screen.png')}
    />
  );
};
