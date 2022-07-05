import React from 'react';
import PropTypes from 'prop-types';
import s from './Filter.module.css';
import { connect } from 'react-redux';
import { changeFilter } from '../../redux/contacts-actions';

const Filter = ({ value, onChange }) => (
  <label className={s.label}>
    Find contacts by name
    <input
      className={s.input}
      type="text"
      name="filter"
      value={value}
      onChange={onChange}
    />
  </label>
);

const mapStateToProps = state => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(changeFilter(e.target.value)),
});

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(Filter);
