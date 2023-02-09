import "./header.css";
import logo from "../../assets/img/logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="container header-content">
        <Link to="/">
          <img src={logo} alt="logo-vinted" />
        </Link>
        <input
          className="search"
          type="text"
          placeholder=" 🔎 Rechercher des articles"
        ></input>
        <div className="header-btns">
          <button className="sign-btns">
            <span className="sign-up">S'inscrire</span> |{" "}
            <span className="sign-in">Se connecter</span>
          </button>
          <button className="call-to-sell-btn">Vends tes articles</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
