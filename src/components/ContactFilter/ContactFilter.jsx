import React from 'react';
import { useDispatch } from 'react-redux';
import { addFilter } from 'redux/contacts/contacts-slice';
import { ContactFilterLabel, ContactFilterInput } from './ContactFilter.styled';

export const ContactFilter = () => {
  const dispatch = useDispatch();

  const filterContact = e => {
    console.log(e.target.value);
    dispatch(addFilter(e.target.value));
  };

  return (
    <ContactFilterLabel>
      Find contacts by name
      <ContactFilterInput
        type="text"
        name="filter"
        // value={filterItems}
        onChange={filterContact}
      />
    </ContactFilterLabel>
  );
};
