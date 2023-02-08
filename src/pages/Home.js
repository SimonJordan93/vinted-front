import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/offers"
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  });
  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <section className="main container">
      <h2>Articles Populaires</h2>
      <div className="item-gallery">
        {data.offers.map((offer, index) => {
          return (
            <div className="item-card" key={index}>
              <div className="profile-info">
                <div className="profile-pic">
                  {/* <img src={offer.owner.account.avatar} alt="" /> */}
                </div>
                <div className="username">{offer.owner.account.username}</div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Home;
