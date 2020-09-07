import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {Input, Button} from 'react-native-elements';
import {SignUpScreenProps} from '../../navigation';
import styles from './signup.styles';

export const SignUp: React.FC<SignUpScreenProps> = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Create new account</Text>
      <Input
        inputContainerStyle={styles.inputContainer}
        placeholder="Full Name"
      />
      <Input
        inputContainerStyle={styles.inputContainer}
        placeholder="Email Address"
        keyboardType="email-address"
        textContentType="name"
      />
      <Input
        inputContainerStyle={styles.inputContainer}
        placeholder="Phone Number"
        keyboardType="phone-pad"
        textContentType="telephoneNumber"
      />
      <Input
        inputContainerStyle={styles.inputContainer}
        placeholder="Password"
        textContentType="password"
        secureTextEntry
      />
      <Button
        title="Log In"
        buttonStyle={styles.signupBtn}
        titleStyle={styles.btnTitle}
      />
      <Text style={styles.terms}>
        By creating an account you agree with our{' '}
        <Text style={styles.termsLink}>Terms of Use.</Text>
      </Text>
    </SafeAreaView>
  );
};
