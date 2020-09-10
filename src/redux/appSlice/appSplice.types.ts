import {User, LoginData, SignUpData} from '../../api';

export interface AppState {
  isLoading: boolean;
  user: User | null;
}

export interface SetUserPayload {
  user: User;
}

export type LoginPayload = LoginData;

export type SignUpPayload = SignUpData;
