import * as Yup from 'yup';
import {hasUpperCase, hasLowerCase, hasSpecialCharacter} from '../../utils';

export const SignUpInput = Yup.object().shape({
  email: Yup.string()
    .label('Email')
    .required('Email is required')
    .email('Email is invalid'),
  fullName: Yup.string().label('Full name').required('Full name is required'),
  password: Yup.string()
    .label('Password')
    .required('Password is required')
    .min(8, 'Pasword must be a minimum of 8 characters')
    .test(
      'Have one uppercase letter',
      'Password must have at least one uppercase letter',
      (value) => hasUpperCase(value as string),
    )
    .test(
      'Have one lowercase letter',
      'Password must have at least one lowercase letter',
      (value) => hasLowerCase(value as string),
    )
    .test(
      'Have one special character',
      'Password must have at least one special character',
      (value) => hasSpecialCharacter(value as string),
    ),
});
