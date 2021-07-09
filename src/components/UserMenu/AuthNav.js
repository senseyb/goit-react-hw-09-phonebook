import React from 'react'
import { NavLink } from "react-router-dom"
import styles from "./UserMenu.Module.css";

const AuthNav = () => (
  <div>
    <NavLink to="/register" exact className={styles.navigation}>
      Регистрация
    </NavLink>
    <NavLink to="/login" exact className={styles.navigation2}>
      Логин
    </NavLink>
  </div>
);

export default AuthNav;