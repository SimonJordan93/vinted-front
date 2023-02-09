import "../Offer/offer.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Offer = () => {
  const params = useParams();
  const id = params.id;
  // console.log(params);

  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`
        https://lereacteur-vinted-api.herokuapp.com/offer/${id}`);
        // console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <section className="offer-main">
      <div className="item-box">
        <div className="offer-images">
          <img src={data.product_image.secure_url} alt="" />
        </div>
        <div className="offer-info">
          <div className="offer-stats">
            <ul>
              <li>
                <span>MARQUE</span> <span>HM</span>
              </li>
              <li>
                <span>TAILLE</span> <span>6 ANS / 110-116 CM</span>
              </li>
              <li>
                <span>ÉTAT</span> <span>NEUF SANS ETIQUETTE</span>
              </li>
              <li>
                <span>COULEUR</span> <span>MARINE</span>
              </li>
              <li>
                <span>EMPLACEMENT</span> <span>ESPANA</span>
              </li>
              <li>
                <span>MODES DE PAIEMENT</span>{" "}
                <span>CARTE BANCAIRE, PAYPAL</span>
              </li>
            </ul>
          </div>
          <div className="offer-description">
            <p>Robe H&M 4/6 ans 🌟 Vestido H&M 4/6 años</p>
            <p>
              {" "}
              vestido de manga larga y pequeña falda de vuelo Color azul marino
              con dibujos frontales Marca H&M Talla 4/6 años ( 110 - 116 cm
              )apenas usado como nuevo
            </p>
            <div className="offer-profile">
              <div className="offer-profile-pic"></div>
              <span className="offer-username">Angadrême.Philippe98</span>
            </div>
          </div>
          <button className="buy-btn">Acheter</button>
        </div>
      </div>
    </section>
  );
};
export default Offer;
