import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./City.module.css";
import Button from "../button/Button";
import BackButton from "../button/BackButton";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(new Date(date));

function City() {
  const { cityId } = useParams();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const [city, setCity] = useState({});
  // const [count, setCount] = useState(0);

  useEffect(() => {
    async function fetchCities() {
      try {
        // setLoading(true);
        // setError("");
        const res = await fetch(`http://localhost:8000/cities/${cityId}`);
        const data = await res.json();
        setCity(data);
        // console.log(data);
      } catch (error) {
        // setError(error.message);
      } finally {
        // setTimeout(() => {
        //   setLoading(false);
        // }, 1500);
      }
    }

    fetchCities();
  }, []);

  // TEMP DATA
  const currentCity = {
    cityName: "Lisbon",
    emoji: "🇵🇹",
    date: "2027-10-31T15:59:59.138Z",
    notes: "My favorite city so far!",
  };

  const { cityName, emoji, date, notes } = city;

  return (
    <div className={styles.city}>
      <div className={styles.row}>
        <h6>City name</h6>
        <h3>
          <span>{emoji}</span> {cityName}
        </h3>
      </div>

      <div className={styles.row}>
        <h6>You went to {cityName} on</h6>
        <p>{formatDate(date || null)}</p>
      </div>

      {notes && (
        <div className={styles.row}>
          <h6>Your notes</h6>
          <p>{notes}</p>
        </div>
      )}

      <div className={styles.row}>
        <h6>Learn more</h6>
        <a
          href={`https://en.wikipedia.org/wiki/${cityName}`}
          target="_blank"
          rel="noreferrer"
        >
          Check out {cityName} on Wikipedia &rarr;
        </a>
      </div>

      <div>
        <BackButton />
        {/* <Button
          onClick={() => {
            navigate(-1);
          }}
          type="back"
        >
          &larr; back
        </Button> */}
      </div>
    </div>
  );
}

export default City;
