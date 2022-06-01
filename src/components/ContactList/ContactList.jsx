import { useEffect } from 'react';
import { ContactNameList } from './ContactList.styled';
import { ContactListItem } from 'components/ContactListItem/ContactIListItem';
import { useDispatch, useSelector } from 'react-redux';
import { contactsOperation, contactsSelectors } from 'redux/contacts';
import { Loader } from 'components/Loader/Loader';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelectors.getContacts);
  const filter = useSelector(contactsSelectors.getFilter);
  const isLoading = useSelector(contactsSelectors.isLoading);

  useEffect(() => {
    dispatch(contactsOperation.fetchContacts());
  }, [dispatch]);

  const getContactsList = () => {
    const filterValue = filter.toLowerCase().trim();
    const sortData = [...contacts].sort((firstEl, secondEl) =>
      firstEl.name.localeCompare(secondEl.name)
    );

    return sortData.filter(contact =>
      contact.name.toLowerCase().includes(filterValue)
    );
  };

  return (
    <>
      <ContactNameList>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            {contacts &&
              getContactsList().map(({ name, number, id }) => (
                <ContactListItem key={id} id={id} name={name} number={number} />
              ))}
          </>
        )}
      </ContactNameList>
    </>
  );
};
