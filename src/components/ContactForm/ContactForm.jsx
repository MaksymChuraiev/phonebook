import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { contactsOperation } from 'redux/contacts';
import { contactsSelectors } from 'redux/contacts';
import {
  Form,
  FormLabel,
  FormInput,
  FormButton,
  AddIcon,
} from './ContactForm.styled';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelectors.getContacts);
  const { register, handleSubmit, resetField } = useForm();

  const onSubmit = async data => {
    if (
      contacts.some(
        contact => contact.name.toLowerCase() === data.name.toLowerCase()
      )
    ) {
      return toast.error(`${data.name} is already in contacts.`);
    }

    dispatch(contactsOperation.addContacts(data));

    resetField('name');
    resetField('number');

    toast.success(`${data.name} was created!`);
  };

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormLabel>
          Name
          <FormInput
            {...register('name')}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces."
            required
            autoComplete="off"
          />
        </FormLabel>
        <FormLabel>
          Number
          <FormInput
            {...register('number')}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            autoComplete="off"
          />
        </FormLabel>

        <FormButton type="submit">
          <AddIcon height="24" />
        </FormButton>
      </Form>
    </>
  );
};
