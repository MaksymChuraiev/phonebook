import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';
import { toast } from 'react-hot-toast';
import {
  FormTitle,
  Form,
  FormLabel,
  FormInput,
  FormButton,
  RegisterButtonIcon,
} from '../RegisterForm/RegisterForm.styled.jsx';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, resetField } = useForm();

  const onSubmit = data => {
    dispatch(authOperations.logIn(data));
    toast.success('Logged in successfully!');

    resetField('email');
    resetField('password');
  };

  return (
    <>
      <FormTitle>Login</FormTitle>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormLabel>
          Email
          <FormInput
            {...register('email')}
            type="email"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            autoComplete="off"
          />
        </FormLabel>
        <FormLabel>
          Password
          <FormInput
            {...register('password')}
            type="password"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            autoComplete="off"
          />
        </FormLabel>
        <FormButton type="submit">
          <RegisterButtonIcon />
        </FormButton>
      </Form>
    </>
  );
};
