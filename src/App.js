import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Cookies from "js-cookie";

// Pages
import Home from "./pages/Home/Home";
import Offer from "./pages/Offer/Offer";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import Publish from "./pages/Publish/Publish";
import Payment from "./pages/Payment/Payment";

// Components
import Header from "./components/Header/Header";

function App() {
  const [token, setToken] = useState(Cookies.get("token-vinted") || null);
  const [id, setId] = useState(Cookies.get("id-vinted") || null);
  const [search, setSearch] = useState("");
  const [values, setValues] = useState([0, 500]);
  const [sortPrice, setSortPrice] = useState("");

  const handleTokenAndId = (token, id) => {
    if (token && id) {
      setToken(token);
      setId(id);
      Cookies.set("token-vinted", token, { expires: 14 });
      Cookies.set("id-vinted", id, { expires: 14 });
    } else {
      setToken(null);
      setId(null);
      Cookies.remove("token-vinted");
      Cookies.remove("id-vinted");
    }
  };

  return (
    <div className="App">
      <Router>
        <Header
          handleTokenAndId={handleTokenAndId}
          token={token}
          search={search}
          setSearch={setSearch}
          values={values}
          setValues={setValues}
          sortPrice={sortPrice}
          setSortPrice={setSortPrice}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Home search={search} values={values} sortPrice={sortPrice} />
            }
          />
          <Route path="/offer/:id" element={<Offer token={token} />} />
          <Route
            path="/signup"
            element={<Signup handleTokenAndId={handleTokenAndId} />}
          />
          <Route
            path="/login"
            element={<Login handleTokenAndId={handleTokenAndId} />}
          />
          <Route path="/publish" element={<Publish token={token} />} />
          <Route path="/payment" element={<Payment token={token} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
