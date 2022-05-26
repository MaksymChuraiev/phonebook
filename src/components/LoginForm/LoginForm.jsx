import { useForm } from 'react-hook-form';
import {
  FormTitle,
  Form,
  FormLabel,
  FormInput,
  FormButton,
} from '../RegisterForm/RegisterForm.styled.jsx';

export const LoginForm = () => {
  const { register, handleSubmit, resetField } = useForm();

  const onSubmit = data => {
    console.log('login: ', data);

    resetField('name');
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
          Passwort
          <FormInput
            {...register('paswort')}
            type="paswort"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            autoComplete="off"
          />
        </FormLabel>
        <FormButton type="submit">Registered</FormButton>
      </Form>
    </>
  );
};
