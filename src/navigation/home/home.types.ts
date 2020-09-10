import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';

export type HomeStackParamList = {
  Home: undefined;
};

type HomeScreenNavigationProp = StackNavigationProp<HomeStackParamList, 'Home'>;
type HomeScreenRouteProp = RouteProp<HomeStackParamList, 'Home'>;
export type HomeScreenProps = {
  navigation: HomeScreenNavigationProp;
  route: HomeScreenRouteProp;
};
