import React from "react";
import {useDispatch, useSelector } from "react-redux";
import { removeContacts } from "../../redux/contacts/contacts.operations";
import styles from "./ContactList.module.css";
import { filteredItemsSelector } from "../../redux/contacts/contacts.selector";

const ContactList = () => {
  const items = useSelector(filteredItemsSelector);
  const dispatch = useDispatch();
  const handleDelete = (id) => dispatch(removeContacts(id));

  return (
    <ul className={styles.ul}>
      {items.map(({ id, name, number }) => (
        <li key={id} className={styles.textContent}>
          <p>
            {name}: {number}
          </p>
          <button
            className={styles.btn}
            type="button"
            onClick={() => handleDelete(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
