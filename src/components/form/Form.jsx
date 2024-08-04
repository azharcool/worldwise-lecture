// "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=0&longitude=0"

import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import styles from "./Form.module.css";
import BackButton from "../button/BackButton";
import Button from "../button/Button";
import useUrlPosition from "../../hooks/useUrlPosition";
import Message from "../message/Message";
import { useCities } from "../../contexts/CitiesProvider";
import { useNavigate } from "react-router-dom";

export function convertToEmoji(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}

function Form() {
  const [cityName, setCityName] = useState("");
  const [country, setCountry] = useState("");
  const [date, setDate] = useState(new Date());
  const [notes, setNotes] = useState("");
  const [emoji, setEmoji] = useState("");
  const [lat, lng] = useUrlPosition();
  const [errorGeocoding, setErrorGeocoding] = useState("");
  const { createCity } = useCities();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchCity() {
      try {
        setErrorGeocoding("");
        const response = await fetch(
          `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`
        );
        const responseJson = await response.json();

        if (!responseJson.countryCode) {
          throw new Error(
            "👋 That doesn't seem to be a city. Click somewhere else 😉"
          );
        }

        setCityName(responseJson.city || responseJson.locality);
        setCountry(responseJson.countryName);
        setEmoji(convertToEmoji(responseJson.countryCode));

        console.log(responseJson);
      } catch (error) {
        setErrorGeocoding(error.message);
      }
    }

    if (lat && lng) {
      fetchCity();
    }
  }, [lat, lng]);

  async function handleSubmit(e) {
    e.preventDefault();

    const newCity = {
      cityName,
      country,
      emoji,
      date,
      notes,
      position: {
        lat,
        lng,
      },
    };
    await createCity(newCity);
    navigate("/app/cities");
  }

  if (errorGeocoding) {
    return <Message message={errorGeocoding} />;
  }

  if (!lat && !lng) {
    return <Message message="Please click on map!" />;
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.row}>
        <label htmlFor="cityName">City name</label>
        <input
          id="cityName"
          onChange={(e) => setCityName(e.target.value)}
          value={cityName}
        />
        <span className={styles.flag}>{emoji}</span>
      </div>

      <div className={styles.row}>
        <label htmlFor="date">When did you go to {cityName}?</label>
        {/* <input
          id="date"
          onChange={(e) => setDate(e.target.value)}
          value={date}
        /> */}
        <DatePicker
          selected={date}
          onChange={(date) => setDate(date)}
          dateFormat="dd/MM/yyyy"
        />
      </div>

      <div className={styles.row}>
        <label htmlFor="notes">Notes about your trip to {cityName}</label>
        <textarea
          id="notes"
          onChange={(e) => setNotes(e.target.value)}
          value={notes}
        />
      </div>

      <div className={styles.buttons}>
        <Button type="primary">Add</Button>
        <BackButton />
      </div>
    </form>
  );
}

export default Form;
