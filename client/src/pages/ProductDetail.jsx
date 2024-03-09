import React from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  // Get product ID from URL params
  const { id } = useParams();

  // Fetch product details using the ID

  return (
    <div>
      {/* Render product details */}
      <h2>Product Details</h2>
      <p>Product ID: {id}</p>
      {/* Add more product details */}
    </div>
  );
};

export default ProductDetails;
