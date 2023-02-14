import "../Toggle/toggle.css";

const Switch = ({ sortPrice, setSortPrice }) => {
  return (
    <div className="switch">
      <div
        onClick={() => setSortPrice("price-asc")}
        className={sortPrice === "price-asc" ? "on" : "off "}
      >
        ⬆
      </div>
      <div
        onClick={() => setSortPrice("price-desc")}
        className={sortPrice === "price-desc" ? "on" : "off"}
      >
        ⬇
      </div>
    </div>
  );
};

export default Switch;
