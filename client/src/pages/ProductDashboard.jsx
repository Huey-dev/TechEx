import React, { useState, useEffect } from "react";
import CategorySidebar from "./CategorySidebar";
import ProductList from "./ProductList";

const ProductDashboard = () => {
  // State to store product data
  const [products, setProducts] = useState([]);

  // Fetch product data from API
  useEffect(() => {
    // Fetch data from API and setProducts(productsData)
  }, []);

  return (
    <div className="flex ">
      <div className="">
        <CategorySidebar />
      </div>
      <div className="">
        <ProductList products={products} />
      </div>
    </div>
  );
};

export default ProductDashboard;
