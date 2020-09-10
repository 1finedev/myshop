import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';

export type ShopParamList = {
  ShopHome: undefined;
  Dresses: undefined;
};

type ShopHomeScreenNavigationProp = StackNavigationProp<
  ShopParamList,
  'ShopHome'
>;
type ShopHomeScreenRouteProp = RouteProp<ShopParamList, 'ShopHome'>;
export type ShopHomeScreenProps = {
  navigation: ShopHomeScreenNavigationProp;
  route: ShopHomeScreenRouteProp;
};

type DressesScreenNavigationProp = StackNavigationProp<
  ShopParamList,
  'Dresses'
>;
type DressesScreenRouteProp = RouteProp<ShopParamList, 'Dresses'>;
export type DressesScreenProps = {
  navigation: DressesScreenNavigationProp;
  route: DressesScreenRouteProp;
};
