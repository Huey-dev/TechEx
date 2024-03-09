import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    parentCategory: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category", // Reference to self for hierarchical structure
    },
  },
  { timestamps: true }
);

const category = mongoose.model("Category", categorySchema);
export default category;
