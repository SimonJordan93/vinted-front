import "./header.css";
import logo from "../../assets/img/logo.svg";
import { Link } from "react-router-dom";
import { DebounceInput } from "react-debounce-input";

const Header = ({ handleToken, token, search, setSearch }) => {
  return (
    <header>
      {/* Si le token existe, on affiche déconnexion, sinon s'inscrire et se connecter */}
      {token ? (
        <>
          <div className="container header-content">
            <Link to="/">
              <img src={logo} alt="logo-vinted" />
            </Link>
            <div className="find-item">
              <DebounceInput
                value={search}
                debounceTimeout={300}
                onChange={(event) => {
                  setSearch(event.target.value);
                }}
                className="search"
                type="text"
                placeholder=" Rechercher des articles"
              ></DebounceInput>
              <div className="refined-search">
                <span></span>
                <div></div>
                <span></span>
                <div></div>
              </div>
            </div>

            <button
              className="logout-btn"
              onClick={() => {
                // Cookies.remove("token-vinted");
                handleToken(null);
              }}
            >
              Se Déconnecter
            </button>
            <Link to="/publish" className="call-to-sell-btn">
              <button className="call-to-sell-btn">Vends tes articles</button>
            </Link>
          </div>
        </>
      ) : (
        <div className="container header-content">
          <Link to="/">
            <img src={logo} alt="logo-vinted" />
          </Link>
          <DebounceInput
            value={search}
            debounceTimeout={300}
            onChange={(event) => {
              setSearch(event.target.value);
            }}
            className="search"
            type="text"
            placeholder=" Rechercher des articles"
          ></DebounceInput>
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
            <Link to="/login" className="call-to-sell-btn">
              <button className="call-to-sell-btn">Vends tes articles</button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
