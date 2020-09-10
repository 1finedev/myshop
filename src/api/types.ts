export interface User {
  fullName: string;
  email: string;
}

export interface Category {
  id: string;
  name: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface SignUpData {
  fullName: string;
  email: string;
  password: string;
}
