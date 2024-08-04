import React, { useContext } from "react";
import styles from "./CityList.module.css";
import CityItem from "./CityItem";
import Spinner from "../spinner/Spinner";
import { Navigate } from "react-router-dom";
import { useCities } from "../../contexts/CitiesProvider";

function CityList() {
  const { cities, loading } = useCities();
  if (loading) {
    return <Spinner />;
  }

  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem key={city.id} city={city} />
      ))}
    </ul>
  );
}

export default CityList;
