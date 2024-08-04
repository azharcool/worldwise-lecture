import React from "react";
import styles from "./CountryList.module.css";
import CountryItem from "./CountryItem";
import Spinner from "../spinner/Spinner";
import { useCities } from "../../contexts/CitiesProvider";

function CountryList() {
  const { cities, loading } = useCities();
  if (loading) {
    return <Spinner />;
  }

  return (
    <div className={styles.countryList}>
      {cities.map((city) => (
        <CountryItem key={city.id} country={city} />
      ))}
    </div>
  );
}

export default CountryList;
