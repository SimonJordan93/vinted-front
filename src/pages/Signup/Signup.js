import "../Signup/signup.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    const value = event.target.value;
    setUsername(value);
  };

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
  };

  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
  };

  // const handleSubmit = event => {
  // event.preventDefault();

  return (
    <section className="sign-up-container">
      <h2>S'inscrire</h2>
      <form className="signup-form">
        <input
          placeholder="Nom d'utilisateur"
          type="text"
          name="email"
          value={username}
          onChange={handleUsernameChange}
        />
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
        <div className="newsletter-call">
          <div className="newsletter-checkbox">
            <input type="checkbox" /> <span>S'inscrire à notre newsletter</span>
          </div>
          <p className="newsletter-terms">
            En m'inscrivant je confirme avoir lu et accepté les Termes &
            Conditions et Politique de Confidentialité de Vinted. Je confirme
            avoir au moins 18 ans.
          </p>
        </div>
        <button className="sign-up-submit">S'inscrire</button>
      </form>
      <Link className="login-redirect" to="/login">
        <p>Tu as déjà un compte ? Connecte-toi !</p>
      </Link>
    </section>
  );
};

export default Signup;
