import React from "react";
import Map from "../../components/map/Map";
import styles from "./AppLayout.module.css";
import SideBar from "../../components/sidebar/Sidebar";
import User from "../../components/user/User";

function AppLayout({ children }) {
  return (
    <div className={styles.app}>
      <SideBar />
      <Map />
      <User />
    </div>
  );
}

export default AppLayout;
