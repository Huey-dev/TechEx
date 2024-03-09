import mongoose from "mongoose";

const shippingSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    deliveryTime: {
      type: String, // You can adjust the data type based on your requirements
      required: true,
    },
  },
  { timestamps: true }
);

const shipping = mongoose.model("Shipping", shippingSchema);
export default shipping;
