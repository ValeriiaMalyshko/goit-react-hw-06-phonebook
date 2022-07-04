import React from 'react';
import PropTypes from 'prop-types';
import Contact from './Contact';
import s from './Contact.module.css';

export default function ContactList({ contacts, onDeleteContact }) {
  return (
    <ul className={s.ul}>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <Contact
            id={id}
            name={name}
            number={number}
            onDelete={() => onDeleteContact(id)}
          />
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};
