import "../Login/login.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = ({ handleTokenAndId }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
  };

  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/login",
        {
          email: email,
          password: password,
        }
      );
      console.log(response.data);
      if (response.data.token) {
        // Cookies.set("token-vinted", response.data.token, { expires: 30 });
        handleTokenAndId(response.data.token, response.data._id);
        navigate("/");
      }
    } catch (error) {
      console.log(error.response.data);
      if (error.response.data === "Unauthorized" || "User not found") {
        setErrorMessage("Votre email ou votre mot de passe est incorrect.");
      }
    }
  };

  return (
    <section className="login-container">
      <h2>Se connecter</h2>
      <form onSubmit={handleLogin} className="login-form">
        <input
          placeholder="Email"
          type="text"
          name="email"
          value={email}
          onChange={handleEmailChange}
        />
        <input
          placeholder="Mot de passe"
          type="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
        />

        <button type="submit" className="login-submit">
          Se connecter
        </button>
        {errorMessage && (
          <p style={{ color: "red", textAlign: "center" }}>{errorMessage}</p>
        )}
      </form>
      <Link className="signup-redirect" to="/signup">
        <p>Pas encore de compte ? Inscris-toi</p>
      </Link>
    </section>
  );
};

export default Login;
