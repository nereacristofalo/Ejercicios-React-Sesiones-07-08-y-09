import React from 'react';
import ContactItem from './ContactItem';

const ContactsList = (props) => {
  const { contacts, onUpdate } = props;

  const onUpdateList = (contact) => {
    onUpdate(contact);
  };

  const getItems = () => {
    return contacts.map((contact) => {
      return (
        <ContactItem
          key={contact.id}
          contact={contact}
          onContactChanged={onUpdateList}
        ></ContactItem>
      );
    });
  };

  return <ul>{getItems()}</ul>;
};

export default ContactsList;
