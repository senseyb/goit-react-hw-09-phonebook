import React, { useState } from "react";
import styles from "./ContactForm.module.css";
import {
  addNewContacts,
  getAllContacts,
} from "../../redux/contacts/contacts.operations";
import Loader from "react-loader-spinner";
import {
  contactsItemsSelector,
  loadingSelector,
} from "../../redux/contacts/contacts.selector";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const initialState = {
  name: "",
  number: "",
};

const ContactForm = () => {
  const [state, setState] = useState(initialState);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllContacts());
  }, [dispatch]);

  const { items, loading } = useSelector((state) => {
    return {
      items: contactsItemsSelector(state),
      loading: loadingSelector(state),
    };
  });

  const handleSubmit = (name, number) => {
    const isDuplicate = items.some((item) => item.name === name);

    if (isDuplicate) {
      alert(name + " is already in contacts ");
      return;
    }

    const newContact = {
      name: name,
      number: number,
    };

    dispatch(addNewContacts(newContact));
  };

  const handleChange = (evt) => {
    setState((prev) => ({ ...prev, [evt.target.name]: evt.target.value }));
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    handleSubmit(state.name, state.number);
    setState({ name: "", number: "" });
  };

  return (
    <div className={styles.block}>
      <form className={styles.form} onSubmit={onSubmit}>
        <span className={styles.title}>Name:</span>
        <input
          onChange={handleChange}
          value={state.name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
        <span className={styles.title}>Number Tel:</span>
        <input
          name="number"
          type="tel"
          onChange={handleChange}
          value={state.number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
        <button className={styles.btn} type="submit">
          Add contact
        </button>
      </form>
      <div className={styles.speener}>
        {loading ? (
          <Loader
            type="ThreeDots"
            color="#00BFFF"
            height={50}
            width={100}
            timeout={3000} //3 secs
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default ContactForm;
