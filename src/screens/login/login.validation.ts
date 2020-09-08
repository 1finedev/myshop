import * as Yup from 'yup';

export const LogInInput = Yup.object().shape({
  email: Yup.string()
    .label('Email')
    .required('Email is required')
    .email('Email is invalid'),
  password: Yup.string().label('Password').required('Password is required'),
});
