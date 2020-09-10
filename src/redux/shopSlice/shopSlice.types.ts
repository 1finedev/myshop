import {Category} from '../../api';

interface ShopCategory extends Category {}

export interface ShopState {
  categories: Map<string, ShopCategory>;
}
