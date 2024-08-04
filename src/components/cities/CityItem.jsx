import React from "react";
import styles from "./CityItem.module.css";
import { Link } from "react-router-dom";
import { useCities } from "../../contexts/CitiesProvider";

function CityItem({ city }) {
  const { deleteCity } = useCities();
  function handleDelete(e) {
    e.preventDefault();
    deleteCity(city.id);
  }
  return (
    <li>
      <Link
        className={styles.cityItem}
        to={`${city.id}?lat=${city.position.lat}&lng=${city.position.lng}`}
      >
        <span className={styles.emoji}>{city.emoji}</span>
        <p className={styles.name}>{city.cityName}</p>

        <date className={styles.date}>{city.date}</date>
        <button className={styles.deleteBtn} onClick={handleDelete}>
          &times;
        </button>
      </Link>
    </li>
  );
}

export default CityItem;
