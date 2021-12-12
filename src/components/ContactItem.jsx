import React from 'react';

const ContactItem = (props) => {
  const { contact } = props;
  return <li>{contact.name}</li>;
};

export default ContactItem;
