import React from 'react';

const AddContact = (props) => {
  const { onContactAdded } = props;

  let name = '';

  const onAdd = () => {
    if (!name) return;
    onContactAdded(name);
  };

  const inputChange = (event) => {
    name = event.target.value;
  };

  return (
    <div>
      <label>Name:</label>
      <input onChange={inputChange} />
      <button onClick={onAdd}>Add</button>
    </div>
  );
};

export default AddContact;
