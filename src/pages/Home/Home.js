import "../Home/home.css";
import { useState, useEffect } from "react";
import axios from "axios";
import hero from "../../assets/img/hero-image.jpg";

//Components
import ItemCard from "../../components/ItemCard/ItemCard";

const Home = ({ search, values, sortPrice }) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/offers?title=${search}&priceMin=${values[0]}&priceMax=${values[1]}&sort=${sortPrice}`
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [search, values, sortPrice]);
  return isLoading ? (
    <span class="loader"></span>
  ) : (
    <>
      <img className="hero-img" src={hero} alt="hero" />
      <section className="main container">
        <h2>Articles en vente</h2>
        <div className="item-gallery">
          {data.offers.map((offer, index) => {
            return <ItemCard key={offer._id} offerInfo={offer} />;
          })}
        </div>
      </section>
    </>
  );
};

export default Home;
