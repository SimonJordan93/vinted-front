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
  const [search, setSearch] = useState("");
  const [values, setValues] = useState([0, 500]);
  const [sortPrice, setSortPrice] = useState("");

  const handleToken = (token) => {
    if (token) {
      setToken(token);
      Cookies.set("token-vinted", token, { expires: 14 });
    } else {
      setToken(null);
      Cookies.remove("token-vinted");
    }
  };

  return (
    <div className="App">
      <Router>
        <Header
          handleToken={handleToken}
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
            element={<Signup handleToken={handleToken} />}
          />
          <Route path="/login" element={<Login handleToken={handleToken} />} />
          <Route path="/publish" element={<Publish token={token} />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
