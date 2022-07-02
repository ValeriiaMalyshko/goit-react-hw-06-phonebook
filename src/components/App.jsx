import React, { useState, useEffect } from 'react';
// import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import Form from './Form/Form';
import ContactList from './Contacts/ContactList';
import Section from './Section/Section';
import Filter from './Filter/Filter';

export default function App() {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const contacts = JSON.parse(localStorage.getItem('contacts'));
    if (contacts) {
      setContacts(contacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  function formSubmitHendler(contact) {
    const newContact = {
      id: nanoid(),
      name: contact.name,
      number: contact.number,
    };
    console.log(newContact);
    if (
      contacts.some(
        contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
      )
    ) {
      alert(`${contact.name} is already in contacts`);
      return;
    }

    setContacts([newContact, ...contacts]);
  }

  function changeFilter(e) {
    setFilter(e.currentTarget.value);
  }

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const deleteCont = id => {
    setContacts(contacts.filter(contact => id !== contact.id));
  };

  const visibleContacts = getVisibleContacts();

  return (
    <div>
      <Section text="Phonebook">
        <Form onSubmit={formSubmitHendler} />
      </Section>
      <Section text="Contacts">
        <Filter value={filter} onChange={changeFilter} />
      </Section>
      <ContactList elements={visibleContacts} onDelete={deleteCont} />
    </div>
  );
}
