import {User, LoginData, SignUpData, Category} from '../../api';

export interface AppState {
  isLoading: boolean;
  user: User | null;
  categories: Category[] | null;
}

export interface SetUserPayload {
  user: User;
}

export type LoginPayload = LoginData;

export type SignUpPayload = SignUpData;

export interface SetCategoriesPayload {
  categories: Category[];
}
