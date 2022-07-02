import React from 'react';
import PropTypes from 'prop-types';
import Contact from './Contact';
import s from './Contact.module.css';

export default function ContactList({ elements, onDelete }) {
  return (
    <ul className={s.ul}>
      {elements.map(({ id, name, number }) => (
        <Contact
          key={id}
          id={id}
          name={name}
          number={number}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  elements: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};
