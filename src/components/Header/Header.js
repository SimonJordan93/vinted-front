import "./header.css";

import logo from "../../assets/img/logo.svg";
import { Link, useLocation } from "react-router-dom";
import { DebounceInput } from "react-debounce-input";

import Slider from "../Slider/Slider";
import Switch from "../Toggle/Toggle";

const Header = ({
  handleTokenAndId,
  token,
  search,
  setSearch,
  values,
  setValues,
  sortPrice,
  setSortPrice,
}) => {
  const location = useLocation();

  // check if the current route is '/payment'
  const isHomePage = location.pathname === "/";

  return (
    <header>
      {/* Si le token existe, on affiche déconnexion, sinon s'inscrire et se connecter */}
      {token ? (
        <>
          <div className="container header-content">
            <Link className="header-logo" to="/">
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
              {isHomePage && ( // conditionally render the 'refined-search' div
                <div className="refined-search">
                  <span>Trier par prix:</span>
                  <Switch sortPrice={sortPrice} setSortPrice={setSortPrice} />
                  <span>Prix entre:</span>
                  <div className="price-range">
                    <Slider values={values} setValues={setValues} />
                  </div>
                </div>
              )}
            </div>

            <button
              className="logout-btn"
              onClick={() => {
                // Cookies.remove("token-vinted");
                handleTokenAndId(null);
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
              <span>Trier par prix:</span>
              <Switch sortPrice={sortPrice} setSortPrice={setSortPrice} />
              <span>Prix entre:</span>
              <div className="price-range">
                <Slider values={values} setValues={setValues} />
              </div>
            </div>
          </div>
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
