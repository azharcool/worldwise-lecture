import React from "react";
import { Outlet } from "react-router-dom";

import styles from "./Sidebar.module.css";
import Logo from "../logo/Logo";
import AppNav from "../app-nav/AppNav";

function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.copyright}>
        &copy; Copyright {new Date().getFullYear()} by WorldWise Inc.
      </p>
    </footer>
  );
}

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Sidebar;
