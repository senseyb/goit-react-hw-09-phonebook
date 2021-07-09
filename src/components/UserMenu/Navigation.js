import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./UserMenu.Module.css";
import { useSelector } from "react-redux";
import { getIsAuthenticated } from "../../redux/auth/auth.selectors";

const Navigation = () => {
  const isAuthenticated = useSelector(getIsAuthenticated);

  return (
    <div>
      {isAuthenticated ? (
        <>
          <NavLink to="/" exact className={styles.navigation}>
            Главная страница
          </NavLink>
          <NavLink to="/contacts" exact className={styles.navigation2}>
            Страница контактов
          </NavLink>
        </>
      ) : (
        <>
          <NavLink to="/" exact className={styles.navigation}>
            Главная страница
          </NavLink>
        </>
      )}
    </div>
  );
};

export default Navigation;
