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
} from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    dispatch(authOperations.register(data))
      .unwrap()
      .then(() => {
        return toast.success('Registration completed!');
      })
      .catch(() => {
        return toast.error('Registration failed!');
      });

    resetField('name');
    resetField('email');
    resetField('password');
  };

  return (
    <>
      <FormTitle>Registration</FormTitle>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormLabel>
          Name
          <FormInput
            {...register('name')}
            title="Name may contain only letters, apostrophe, dash and spaces."
            required
            autoComplete="off"
          />
        </FormLabel>
        <FormLabel>
          Email
          <FormInput
            {...register('email', {
              required: true,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: 'Enter a valid e-mail address',
              },
            })}
            type="email"
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
