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

  return (
    <div>
      <AddContact onChange={onAddContact} />
      <ContactsList contacts={list} />
    </div>
  );
};
export default ContactsPage;
