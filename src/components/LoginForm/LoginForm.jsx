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
  FormErrorMessage,
  RegisterButtonIcon,
} from '../RegisterForm/RegisterForm.styled.jsx';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    dispatch(authOperations.logIn(data))
      .unwrap()
      .then(() => {
        return toast.success('Logged in successfully!');
      })
      .catch(() => {
        return toast.error('No success!');
      });

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
            type="email"
            {...register('email', {
              required: true,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: 'Enter a valid e-mail address',
              },
            })}
            required
            autoComplete="off"
          />
          {errors.email && (
            <FormErrorMessage>{errors.email.message}</FormErrorMessage>
          )}
        </FormLabel>
        <FormLabel>
          Password
          <FormInput
            {...register('password')}
            type="password"
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
