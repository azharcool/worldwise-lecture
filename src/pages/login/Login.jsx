import { useState } from "react";
import styles from "./Login.module.css";
import PageNav from "../../components/page-nav/PageNav";
import Button from "../../components/button/Button";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthProvider";

// database data
const FAKE_USER = {
  name: "john",
  email: "john@gmail.com",
  password: "john@123",
  birthYear: 1990,
  avatar: "https://i.pravatar.cc/100?u=zz",
};

export default function Login() {
  // PRE-FILL FOR DEV PURPOSES
  const [email, setEmail] = useState("john@gmail.com");
  const [password, setPassword] = useState("john@123");
  const { login } = useAuth();
  const navigate = useNavigate();

  return (
    <main className={styles.login}>
      <PageNav />
      <form
        className={styles.form}
        onSubmit={async (e) => {
          e.preventDefault();
          const result = await login(email, password);
          console.log({ result });
          if (result) {
            navigate("/app");
          }
        }}
      >
        <div className={styles.row}>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <div>
          <Button onClick={() => {}} type="primary">
            Login
          </Button>
        </div>
      </form>
    </main>
  );
}
