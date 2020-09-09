import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {Input, Button} from 'react-native-elements';
import {yupResolver} from '@hookform/resolvers';
import {useForm, Controller} from 'react-hook-form';
import {useDispatch} from 'react-redux';

import {SignUpScreenProps} from '../../navigation';
import styles from './signup.styles';
import {SignUpInput} from './signup.validation';
import {signupUser} from '../../redux';

interface SignUpFormData {
  fullName: string;
  email: string;
  password: string;
}

export const SignUp: React.FC<SignUpScreenProps> = () => {
  const dispatch = useDispatch();
  const {control, handleSubmit, errors} = useForm<SignUpFormData>({
    resolver: yupResolver(SignUpInput),
  });

  const onSubmit = (data: SignUpFormData) => {
    dispatch(signupUser(data));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Create new account</Text>
      <Controller
        control={control}
        name="fullName"
        defaultValue=""
        render={({onChange, onBlur, value}) => {
          return (
            <Input
              inputContainerStyle={styles.inputContainer}
              placeholder="Full Name"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              errorMessage={errors.fullName?.message}
              errorStyle={styles.errorMessage}
            />
          );
        }}
      />

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
              autoCapitalize="none"
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
      <Button
        title="Sign Up"
        buttonStyle={styles.signupBtn}
        containerStyle={styles.signupBtnContainer}
        titleStyle={styles.btnTitle}
        onPress={handleSubmit(onSubmit)}
      />
      <Text style={styles.terms}>
        By creating an account you agree with our{' '}
        <Text style={styles.termsLink}>Terms of Use.</Text>
      </Text>
    </SafeAreaView>
  );
};
