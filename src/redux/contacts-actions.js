import { nanoid } from 'nanoid';
import types from './contacts-types';

const addContact = ({ name, number }) => ({
  type: types.ADD,
  payload: {
    id: nanoid.generate(),
    name,
    number,
    completed: false,
  },
});

const deleteContact = contactId => ({
  type: types.DELETE,
  payload: contactId,
});

const Filter = value => ({
  type: types.FILTER,
  payload: value,
});

export default { addContact, deleteContact, Filter };
