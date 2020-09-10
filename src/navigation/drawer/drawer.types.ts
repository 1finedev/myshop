import {DrawerNavigationProp} from '@react-navigation/drawer';
import {RouteProp} from '@react-navigation/native';

export type DrawerParamList = {
  Home: undefined;
  Shop: undefined;
  Bag: undefined;
  Search: undefined;
  Orders: undefined;
  Wishlist: undefined;
  Profile: undefined;
};

type HomeScreenNavigationProp = DrawerNavigationProp<DrawerParamList, 'Home'>;
type HomeScreenRouteProp = RouteProp<DrawerParamList, 'Home'>;
export type HomeScreenProps = {
  navigation: HomeScreenNavigationProp;
  route: HomeScreenRouteProp;
};
