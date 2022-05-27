import { ContactFilter } from 'components/ContactFilter/ContactFilter';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Container } from 'components/Container/Container.styled';

const ContactsPage = () => {
  return (
    <Container>
      <ContactForm />
      <ContactFilter />
      <ContactList />
    </Container>
  );
};

export default ContactsPage;
