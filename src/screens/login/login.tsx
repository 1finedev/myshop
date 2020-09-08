import React from 'react';
import {View, Text} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {Input, Button} from 'react-native-elements';
import {yupResolver} from '@hookform/resolvers';

import {LoginScreenProps} from '../../navigation';
import styles from './login.styles';
import {LogInInput} from './login.validation';

interface LoginInFormData {
  email: string;
  password: string;
}

export const Login: React.FC<LoginScreenProps> = () => {
  const {control, handleSubmit, errors} = useForm<LoginInFormData>({
    resolver: yupResolver(LogInInput),
  });

  const onSubmit = (data: LoginInFormData) => console.log(data);
  return (
    <View>
      <Text style={styles.header}>Log In</Text>
      <Controller
        control={control}
        name="email"
        defaultValue=""
        render={({onChange, onBlur, value}) => {
          return (
            <Input
              inputContainerStyle={styles.inputContainer}
              placeholder="Email Address"
              textContentType="emailAddress"
              keyboardType="email-address"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              errorMessage={errors.email?.message}
              errorStyle={styles.errorMessage}
            />
          );
        }}
      />

      <Controller
        control={control}
        name="password"
        defaultValue=""
        render={({onChange, onBlur, value}) => {
          return (
            <Input
              inputContainerStyle={styles.inputContainer}
              placeholder="Password"
              textContentType="password"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              secureTextEntry
              errorMessage={errors.password?.message}
              errorStyle={styles.errorMessage}
            />
          );
        }}
      />

      <View style={styles.btnContainer}>
        <Button
          title="Log In"
          buttonStyle={styles.loginBtn}
          titleStyle={styles.btnTitle}
          onPress={handleSubmit(onSubmit)}
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
