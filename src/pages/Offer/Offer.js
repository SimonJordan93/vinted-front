import "../Offer/offer.css";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const Offer = ({ token }) => {
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
  }, [id]);

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <section className="offer-main">
      <div className="item-box">
        <div className="offer-images">
          <img src={data.product_image.secure_url} alt="product" />
        </div>
        <div className="offer-info">
          <div className="offer-top-section">
            <p className="offer-price">{data.product_price} €</p>
            {data.product_details.map((detail, index) => {
              const key = Object.keys(detail)[0];
              return (
                <div className="offer-stats" key={index}>
                  {/* J'affiche le nom dela clef  */}
                  <span className="offer-key">{key} </span>
                  <span className="offer-value">{detail[key]}</span>
                </div>
              );
            })}
          </div>

          <div className="offer-description">
            <p className="offer-product-name">{data.product_name}</p>
            <p className="offer-product-description">
              {data.product_description}
            </p>
            <div className="offer-profile">
              {data.owner.account.avatar && (
                <div className="offer-profile-pic">
                  <img src={data.owner.account.avatar.secure_url} alt="" />
                </div>
              )}
              <span className="offer-username">
                {data.owner.account.username}
              </span>
            </div>
          </div>
          <Link
            to={token ? "/payment" : "/login"}
            className="buy-link"
            state={token ? data : null}
          >
            <span>Acheter</span>
          </Link>
        </div>
      </div>
    </section>
  );
};
export default Offer;
