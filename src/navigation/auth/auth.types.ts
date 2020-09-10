import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';

export type AuthStackParamList = {
  Landing: undefined;
  Login: undefined;
  SignUp: undefined;
};

type LandingScreenNavigationProp = StackNavigationProp<
  AuthStackParamList,
  'Landing'
>;
type LandingScreenRouteProp = RouteProp<AuthStackParamList, 'Landing'>;
export type LandingScreenProps = {
  navigation: LandingScreenNavigationProp;
  route: LandingScreenRouteProp;
};

type LoginScreenNavigationProp = StackNavigationProp<
  AuthStackParamList,
  'Login'
>;
type LoginScreenRouteProp = RouteProp<AuthStackParamList, 'Login'>;
export type LoginScreenProps = {
  navigation: LoginScreenNavigationProp;
  route: LoginScreenRouteProp;
};

type SignUpScreenNavigationProp = StackNavigationProp<
  AuthStackParamList,
  'SignUp'
>;
type SignUpScreenRouteProp = RouteProp<AuthStackParamList, 'SignUp'>;
export type SignUpScreenProps = {
  navigation: SignUpScreenNavigationProp;
  route: SignUpScreenRouteProp;
};
