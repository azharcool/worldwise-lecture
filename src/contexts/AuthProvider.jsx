import React, { createContext, useContext, useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// middleware - logger, more state
const AuthContext = createContext({
  user: {},
  loading: false,
  login: async (_email, _password) => {},
  logout: () => {},
});

// database data
const FAKE_USER = {
  name: "john",
  email: "john@gmail.com",
  password: "john@123",
  birthYear: 1990,
  avatar: "https://i.pravatar.cc/100?u=zz",

  cities: [],
  user: null,
  token: null,
};

// which data update
// what data

export default function AuthProvider({ children }) {
  // useReducer
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function login(email, password) {
    setLoading(true);
    if (email === FAKE_USER.email && password === FAKE_USER.password) {
      setUser(FAKE_USER);
      setLoading(false);
      return Promise.resolve(true);
    }
    return Promise.resolve(false);
  }

  function logout() {
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        error,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
