import React, { createContext, useContext, useState, useEffect } from "react";

const CitiesContext = createContext({
  cities: [],
  loading: false,
});

export default function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchCities() {
      try {
        setLoading(true);
        setError("");
        const res = await fetch("http://localhost:8000/cities");
        const data = await res.json();
        setCities(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 1500);
      }
    }

    fetchCities();
  }, []);

  async function createCity(newCity) {
    try {
      setLoading(true);
      setError("");
      const res = await fetch("http://localhost:8000/cities", {
        method: "POST",
        body: JSON.stringify(newCity),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      setCities((cities) => [...cities, data]);
    } catch (error) {
      setError(error.message);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 1500);
    }
  }

  async function deleteCity(id) {
    try {
      setLoading(true);
      setError("");
      const res = await fetch(`http://localhost:8000/cities/${id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      setCities((cities) => cities.filter((city) => city.id !== id));
    } catch (error) {
      setError(error.message);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 1500);
    }
  }

  return (
    <CitiesContext.Provider
      value={{
        cities,
        loading,
        createCity,
        deleteCity,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

export function useCities() {
  const context = useContext(CitiesContext);
  return context;
}
