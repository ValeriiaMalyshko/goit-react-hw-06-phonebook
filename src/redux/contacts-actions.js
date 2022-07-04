import { nanoid } from 'nanoid';
import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('contacts/add', ({ name, number }) => ({
  payload: {
    id: nanoid.generate(),
    name,
    number,
    completed: false,
  },
}));

const deleteContact = createAction('contacts/delete');

const changeFilter = createAction('contacts/changeFilter');

export default { addContact, deleteContact, changeFilter };
