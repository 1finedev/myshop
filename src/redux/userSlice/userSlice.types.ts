interface User {
  fullName: string;
  email: string;
}

export interface UserState {
  user: User | null;
  token: string | null;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface SignUpPayload {
  fullName: string;
  email: string;
  password: string;
}
