import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loading from "../Components/Loading";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`/products/${id}`);
        setProduct(res.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) return <Loading />;
  
  return product ? (
    <div>
      <h2>{product.title}</h2>
      <p>Category: {product.category}</p>
      <p>Price: {product.price}</p>
      <p>Location: {product.location}</p>
      <p>Seller Name: {product.sellerName}</p>
      <p>Seller Email: {product.sellerEmail}</p>
      <p>Created At: {product.createdAt}</p>
      <div className="images">
        {product.images.map((img, idx) => (
          <img key={idx} src={img} alt={`Product ${idx}`} />
        ))}
      </div>
    </div>
  ) : (
    <p>Product not found</p>
  );
};

export default ProductDetailsPage;