import Product from "../models/product.model.js";
import { errorHandler } from "../utils/error.js";

export const createProduct = async (req, res, next) => {
  const { title, description, category, price } = req.body;

  // Input validation
  if (!title || !description || !category || !price) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    // Create new product
    const product = await Product.create(req.body);
    // Return success response
    return res
      .status(201)
      .json({ message: "Product created successfully", product });
  } catch (error) {
    // Handle error
    console.error("Error creating product:", error);
    next(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
