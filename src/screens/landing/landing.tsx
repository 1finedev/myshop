import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {Button} from 'react-native-elements';
import styles from './landing.styles';
import {LandingScreenProps} from '../../navigation';
import {LogoBlack} from '../../assets/icons';

export const Landing: React.FC<LandingScreenProps> = ({navigation}) => {
  const onLoginBtnPress = () => navigation.push('Login');
  const onSignUpBtnPress = () => navigation.push('SignUp');

  return (
    <SafeAreaView style={styles.container}>
      <LogoBlack style={styles.logo} iconSize={75} />
      <Text style={styles.header}>Welcome to Shopertino</Text>
      <Text style={styles.subHeader}>
        Shop & get updates on new products, promotions, and sales with our
        mobile app.
      </Text>
      <Button
        containerStyle={styles.btnContainer}
        title="Log In"
        buttonStyle={styles.logInBtn}
        titleStyle={styles.btnTitle}
        onPress={onLoginBtnPress}
      />

      <Button
        title="Sign Up"
        type="outline"
        containerStyle={styles.btnContainer}
        buttonStyle={styles.signUpBtn}
        titleStyle={styles.signUpTitle}
        onPress={onSignUpBtnPress}
      />
    </SafeAreaView>
  );
};
