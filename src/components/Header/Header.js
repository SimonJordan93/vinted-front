import "./header.css";
import logo from "/Users/simonjordan/LeReacteur-Formation/REACT/vinted-react/vinted-front/src/assets/img/logo.svg";
import hero from "/Users/simonjordan/LeReacteur-Formation/REACT/vinted-react/vinted-front/src/assets/img/hero-image.jpg";

const Header = () => {
  return (
    <header>
      <div className="container header-content">
        <img src={logo} alt="logo-vinted" />
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

      <img
        className="hero-img"
        src={hero}
        alt="people folding clothes on bed laughing"
      />
    </header>
  );
};

export default Header;
