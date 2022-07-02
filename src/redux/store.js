import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
// import { composeWithDevTools } from 'redux-devtools-extension';
import contactsReducer from './contacts-reducer';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});
// const rootReducer = combineReducers({});
// export type RootState = ReturnType<typeof rootReducer>;
// export type RootState = ReturnType<typeof store.getState>;

export default store;
