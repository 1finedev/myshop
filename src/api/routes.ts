import {User, LoginData, SignUpData, Category} from './types';
import data from './data';
import {timeout} from '../utils';

export const login = async (loginData: LoginData): Promise<User> => {
  const {email} = loginData;
  await timeout(2000);
  return {email, fullName: 'John Doe'};
};

export const signup = async (signupData: SignUpData): Promise<User> => {
  await timeout(2000);
  return {...signupData};
};

export const fetchCategories = async (): Promise<Category[]> => {
  await timeout(2000);
  return data.categories;
};
