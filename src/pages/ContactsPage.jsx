import { ContactFilter } from 'components/ContactFilter/ContactFilter';
import { ContactForm } from 'components/ContactForm/ContactForm';
import {
  FormWrap,
  ContactPageWrap,
} from 'components/ContactForm/ContactForm.styled';
import { ContactList } from 'components/ContactList/ContactList';

const ContactsPage = () => {
  return (
    <ContactPageWrap>
      <FormWrap>
        <ContactForm />
        <ContactFilter />
      </FormWrap>
      <ContactList />
    </ContactPageWrap>
  );
};

export default ContactsPage;
