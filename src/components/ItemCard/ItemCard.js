import { Link } from "react-router-dom";

const ItemCard = ({ offerInfo }) => {
  return (
    <Link to={`/offer/${offerInfo._id}`} className="item-card">
      <div className="profile-info">
        {offerInfo.owner.account.avatar ? (
          <div className="profile-pic">
            <img src={offerInfo.owner.account.avatar.secure_url} alt="" />
          </div>
        ) : (
          <div className="profile-pic"></div>
        )}
        <div className="username">{offerInfo.owner.account.username}</div>
      </div>
      <div className="product-pic">
        <img src={offerInfo.product_image.url} alt="" />
      </div>
      <div className="product-info">
        <p>{offerInfo.product_price} €</p>
        <div className="size-brand">
          {offerInfo.product_details.map((detail, index) => {
            if (detail.TAILLE) {
              return <p key={index}>{detail.TAILLE}</p>;
            } else if (detail.MARQUE) {
              return <p key={index}>{detail.MARQUE}</p>;
            }
          })}
        </div>
      </div>
    </Link>
  );
};

export default ItemCard;
