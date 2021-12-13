import React, { useState } from 'react';
import AddContact from '../components/AddContact';
import ContactsList from '../components/ContactsList';
import { Contact } from '../models/contact.model';

const ContactsPage = () => {
  const [list, setList] = useState([
    new Contact('pepe argento', false, 1),
    new Contact('moni argento', false, 2),
    new Contact('fatiga argento', true, 3),
  ]);

  const onAddContact = (name) => {
    setList([...list, new Contact(name, false, list[list.length - 1].id + 1)]);
  };

  const onUpdateContact = (contact) => {
    console.log('contact', contact);
    setList((oldList) => {
      const newList = oldList.map((e) => {
        if (e.id === contact.id) {
          return { ...e, isOnline: !e.isOnline };
        }
        return e;
      });
      console.log('LISTAS', newList, oldList);
      return newList;
    });
  };

  return (
    <div>
      <AddContact onContactAdded={onAddContact} />
      <ContactsList contacts={list} onUpdate={onUpdateContact} />
    </div>
  );
};
export default ContactsPage;
