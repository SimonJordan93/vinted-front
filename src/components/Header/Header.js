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
          placeholder=" 🔍 Rechercher des articles"
        ></input>
        <div className="header-btns">
          <button className="sign-btns">
            <Link to="/signup" className="sign-up">
              <span>S'inscrire</span>
            </Link>{" "}
            |{" "}
            <Link to="/login" className="sign-in">
              <span>Se connecter</span>
            </Link>
          </button>
          <button className="call-to-sell-btn">Vends tes articles</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
