import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ id, title, price, location, images }) => {
  const navigate = useNavigate();

  return (
    <div
      data-testid="product-card"
      onClick={() => navigate(`/product/${id}/view`)}
    >
      <img src={images[0]} alt={title} />
      <h3>{title}</h3>
      <p>Price: {price}</p>
      <p>Location: {location}</p>
    </div>
  );
};

export default ProductCard;