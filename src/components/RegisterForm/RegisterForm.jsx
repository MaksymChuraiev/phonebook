import { useForm } from 'react-hook-form';
import {
  FormTitle,
  Form,
  FormLabel,
  FormInput,
  FormButton,
} from './RegisterForm.styled';

export const RegisterForm = () => {
  const { register, handleSubmit, resetField } = useForm();

  const onSubmit = data => {
    console.log('register: ', data);

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
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            autoComplete="off"
          />
        </FormLabel>
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
        <FormButton type="submit">Registered</FormButton>
      </Form>
    </>
  );
};
