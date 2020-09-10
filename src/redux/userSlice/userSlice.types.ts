import {User, LoginData, SignUpData} from '../../api';

export interface UserState {
  user: User | null;
  token: string | null;
}

export interface SetUserPayload {
  user: User;
}

export type LoginPayload = LoginData;

export type SignUpPayload = SignUpData;
