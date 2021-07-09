import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsername } from "../../redux/auth/auth.selectors";
import { logOut } from "../../redux/auth/auth.operations";
import styles from "./UserMenu.Module.css";

const UserMenu = () => {
  const name = useSelector(getUsername);
  const dispatch = useDispatch();
  const onLogout = () => dispatch(logOut());

  return (
    <div>
      <span className={styles.userMenu}>Welcome, {name}</span>
      <button type="button" onClick={onLogout} className={styles.userMenuBtn}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
