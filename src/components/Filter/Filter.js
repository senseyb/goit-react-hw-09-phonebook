import React from "react";
import styles from "./Filter.module.css";
import { filterChange } from "../../redux/contacts/contacts.actions";
import { useDispatch, useSelector } from "react-redux";
import { contactsFilterSelector } from "../../redux/contacts/contacts.selector";

const Filter = () => {
  const filter = useSelector(contactsFilterSelector);
  const dispatch = useDispatch();
  const handleChange = (e) => dispatch(filterChange(e));

  const onChange = (evt) => {
    handleChange(evt.target.value);
  };
  return (
    <div className={styles.block}>
      <h2 className={styles.title}>Find contacts by name</h2>
      <input
        className={styles.input}
        id="filter"
        name="filter"
        type="text"
        onChange={onChange}
        value={filter}
      ></input>
    </div>
  );
};

export default Filter;
