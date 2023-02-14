import "../Publish/publish.css";
import { useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

import MyDropzone from "../../components/MyDropzone/MyDropzone";

const Publish = ({ token }) => {
  // File input
  const [picture, setPicture] = useState();
  // const [imageToDisplay, setImageToDisplay] = useState();

  // Text inputs
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [condition, setCondition] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [checkbox, setCheckbox] = useState(false);

  // Submit function
  const handlePublish = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      // My keys/values to post
      formData.append("title", title);
      formData.append("description", description);
      formData.append("brand", brand);
      formData.append("size", size);
      formData.append("color", color);
      formData.append("condition", condition);
      formData.append("location", location);
      formData.append("price", price);
      formData.append("checkbox", checkbox);
      formData.append("picture", picture);
      // axios.post gets 3 arguments: url to share, body in formData, potenital headers to send
      // token and body type are sent here
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/offer/publish",
        formData,
        {
          headers: {
            authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      // console.log(token);
      console.log(response);
    } catch (error) {
      // console.log(token);
      console.log(error.response.data);
    }
  };

  return token ? (
    <div className="publish-main">
      <div className="publish-container">
        <h2>Vends ton article</h2>
        <form onSubmit={handlePublish} className="publish-form">
          <div className="file-input">
            <MyDropzone picture={picture} setPicture={setPicture} />
            {/* <input
              type="file"
              onChange={(event) => {
                console.log("File input changed");
                setPicture(event.target.files[0]);
              }}
            /> */}
          </div>
          <div className="text-input-section">
            <div className="text-input">
              <h4>Titre</h4>
              <input
                value={title}
                type="text"
                placeholder=" ex: Chemise Sézane Verte"
                onChange={(event) => {
                  setTitle(event.target.value);
                }}
              />
            </div>
            <div className="text-input">
              <h4>Décris ton article</h4>
              <textarea
                value={description}
                type="text"
                rows="5"
                placeholder=" ex: Porté quelquesfois, taille correctement"
                onChange={(event) => {
                  setDescription(event.target.value);
                }}
              />
            </div>
          </div>
          <div className="text-input-section">
            <div className="text-input">
              <h4>Marque</h4>
              <input
                value={brand}
                type="text"
                placeholder=" ex: Zara"
                onChange={(event) => {
                  setBrand(event.target.value);
                }}
              />
            </div>
            <div className="text-input">
              <h4>Taille</h4>
              <input
                value={size}
                type="text"
                placeholder=" ex: L / 40 /12"
                onChange={(event) => {
                  setSize(event.target.value);
                }}
              />
            </div>
            <div className="text-input">
              <h4>Couleur</h4>
              <input
                value={color}
                type="text"
                placeholder=" ex: Fushia"
                onChange={(event) => {
                  setColor(event.target.value);
                }}
              />
            </div>
            <div className="text-input">
              <h4>Etat</h4>
              <input
                value={condition}
                type="text"
                placeholder=" ex: Neuf avec étiquette"
                onChange={(event) => {
                  setCondition(event.target.value);
                }}
              />
            </div>
            <div className="text-input">
              <h4>Lieu</h4>
              <input
                value={location}
                type="text"
                placeholder=" ex: Paris"
                onChange={(event) => {
                  setLocation(event.target.value);
                }}
              />
            </div>
          </div>
          <div className="text-input-section">
            <div className="text-input">
              <h4>Prix</h4>
              <div className="checkbox-section">
                <input
                  value={price}
                  className="price-input"
                  type="text"
                  placeholder=" 0,00 €"
                  onChange={(event) => {
                    setPrice(event.target.value);
                  }}
                />
                <div className="exchange-checkbox">
                  <input
                    checked={checkbox}
                    type="checkbox"
                    onChange={() => {
                      setCheckbox(!checkbox);
                    }}
                  />{" "}
                  <span>Je suis intéressé(e) par les échanges</span>
                </div>
              </div>
            </div>
          </div>
          <div className="form-button-section">
            <button type="submit" className="form-button">
              Ajouter
            </button>
          </div>
        </form>
      </div>
    </div>
  ) : (
    <Navigate to="/" />
  );
};

export default Publish;
