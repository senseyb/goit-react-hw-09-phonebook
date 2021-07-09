import React from "react";
import Navigation from "./Navigation";
import UserMenu from "./UserMenu";
import AuthNav from "./AuthNav";
import { useSelector } from "react-redux";
import { getIsAuthenticated } from "../../redux/auth/auth.selectors";
import styles from "./UserMenu.Module.css";

const AppBar = () => {
  const isAuthenticated = useSelector(getIsAuthenticated);

  return (
    <header className={styles.header}>
      <Navigation />
      {isAuthenticated ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

export default AppBar;
