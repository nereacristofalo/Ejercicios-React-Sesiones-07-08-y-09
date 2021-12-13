import React from 'react';

const ContactItem = (props) => {
  const { contact, onContactChanged } = props;

  const onChangeState = () => {
    onContactChanged(contact);
  };

  return (
    <li>
      {contact.name}
      <button onClick={onChangeState}>
        {contact.isOnline ? 'Online' : 'Offline'}
      </button>
      <button>Eliminar</button>
    </li>
  );
};

export default ContactItem;
