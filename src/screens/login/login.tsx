import React from 'react';
import {View, Text} from 'react-native';
import {Input, Button} from 'react-native-elements';
import {LoginScreenProps} from '../../navigation';
import styles from './login.styles';

export const Login: React.FC<LoginScreenProps> = () => {
  return (
    <View>
      <Text style={styles.header}>Log In</Text>
      <Input
        inputContainerStyle={styles.inputContainer}
        placeholder="Email or phone number"
      />
      <Input
        inputContainerStyle={styles.inputContainer}
        placeholder="Password"
        textContentType="password"
        secureTextEntry
      />
      <View style={styles.btnContainer}>
        <Button
          title="Log In"
          buttonStyle={styles.loginBtn}
          titleStyle={styles.btnTitle}
        />
        <Text style={styles.btnContainerText}>OR</Text>
        <Button
          title="Facebook Login"
          buttonStyle={styles.facebookBtn}
          titleStyle={styles.btnTitle}
        />
      </View>
    </View>
  );
};
