import React from 'react';
import ContactItem from './ContactItem';

const ContactsList = (props) => {
  const { contacts } = props;

  const getItems = () => {
    return contacts.map((contact) => {
      return <ContactItem key={contact.id} contact={contact}></ContactItem>;
    });
  };

  return <ul>{getItems()}</ul>;
};

export default ContactsList;
