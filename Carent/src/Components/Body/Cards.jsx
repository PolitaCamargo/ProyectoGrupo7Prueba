import PropTypes from "prop-types";
import "./Card.css";

function Card({ imageSrc, description, price }) {
  return (
    <div className="card">
      <img src={imageSrc} alt="Product" className="card-image" />
      <div className="card-content">
        <p className="card-description">{description}</p>
        <p className="card-price">${price}</p>
      </div>
      <button className="card-button">Agregar a carrito</button>
    </div>
  );
}

Card.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default Card;
