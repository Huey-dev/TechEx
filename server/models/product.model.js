import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category:{
        type: String,
        required: true
    },
    price: {
      type: Number,
      required: true,
    },
  },
  { timestamp: true }
);

const product = mongoose.model("Product", productSchema);
export default product;
