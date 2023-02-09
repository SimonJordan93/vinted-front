import "../Login/login.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
  };

  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
  };
  return (
    <section className="login-container">
      <h2>Se connecter</h2>
      <form className="login-form">
        <input
          placeholder="Email"
          type="text"
          name="email"
          value={email}
          onChange={handleEmailChange}
        />
        <input
          placeholder="Mot de passe"
          type="text"
          name="email"
          value={password}
          onChange={handlePasswordChange}
        />

        <button className="login-submit">Se connecter</button>
      </form>
      <Link className="signup-redirect" to="/signup">
        <p>Pas encore de compte ? Inscris-toi</p>
      </Link>
    </section>
  );
};

export default Login;
