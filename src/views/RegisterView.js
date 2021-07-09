import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { register } from "../redux/auth/auth.operations";
import styles from "./Views.Module.css";

const initialState = {
  name: "",
  email: "",
  password: "",
};
const RegisterView = () => {
  const location = useLocation();
  const [state, setState] = useState(initialState);
  const dispatch = useDispatch();
  const handleChange = ({ target: { name, value } }) => {
    setState((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register(state));
    setState({ name: "", email: "", password: "" });
  };

  return (
    <div className={styles.regist}>
      <h1 className={styles.registTitle}>Страница регистрации</h1>
      <form onSubmit={handleSubmit} autoComplete="off" className={styles.form}>
        <lable className={styles.registLable}>
          <p className={styles.registrP}>Имя пользователя</p>
          <input
            type="text"
            name="name"
            value={state.name}
            onChange={handleChange}
          ></input>
        </lable>
        <lable className={styles.registLable}>
          <p className={styles.registrP}>Почта</p>
          <input
            type="email"
            name="email"
            value={state.email}
            onChange={handleChange}
          ></input>
        </lable>
        <lable className={styles.registLable}>
          <p className={styles.registrP}>Пароль</p>
          <input
            type="password"
            name="password"
            value={state.password}
            onChange={handleChange}
          ></input>
        </lable>
        <button type="submit" className={styles.registLButton}>
          {location.pathname === "/registration" ? "REGISTER" : "LOGIN"}
        </button>
      </form>
    </div>
  );
};

export default RegisterView;
