import { useState } from "react";
import "../Signup/signup.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = ({ handleToken }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newsletter, setNewsletter] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

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

  const handleCheckboxChange = (event) => {
    setNewsletter(!newsletter);
  };

  const handleSignup = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/signup",
        {
          username: username,
          email: email,
          password: password,
          newsletter: newsletter,
        }
      );
      //   Si je reçois bien un token
      if (response.data.token) {
        // Cookies.set("token-vinted", response.data.token, { expires: 30 });
        handleToken(response.data.token);
        // Et je redirige vers Home
        navigate("/");
      }
    } catch (error) {
      console.log(error.response.data);
      console.log(error.response.status);
      // Si je reçois un message d'erreur "This email already has an account"
      if (error.response.data.message === "This email already has an account") {
        setErrorMessage(
          "Cet email est déjà utilisé, veuillez créer un compte avec un mail valide."
        );
      }
      // Si je reçois un message d'erreur "Missing parameters"
      if (error.response.data.message === "Missing parameters") {
        setErrorMessage("Veuillez remplir tous les champs.");
      }
    }
  };

  return (
    <section className="sign-up-container">
      <h2>S'inscrire</h2>
      <form onSubmit={handleSignup} className="signup-form">
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
            <input
              type="checkbox"
              checked={newsletter}
              onChange={handleCheckboxChange}
            />{" "}
            <span>S'inscrire à notre newsletter</span>
          </div>
          <p className="newsletter-terms">
            En m'inscrivant je confirme avoir lu et accepté les Termes &
            Conditions et Politique de Confidentialité de Vinted. Je confirme
            avoir au moins 18 ans.
          </p>
        </div>
        <button type="submit" className="sign-up-submit">
          S'inscrire
        </button>
        {errorMessage && (
          <p style={{ color: "red", textAlign: "center" }}>{errorMessage}</p>
        )}
      </form>
      <Link className="login-redirect" to="/login">
        <p>Tu as déjà un compte ? Connecte-toi !</p>
      </Link>
    </section>
  );
};

export default Signup;
