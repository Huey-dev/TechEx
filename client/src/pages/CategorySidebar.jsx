import React from "react";
import { Link } from "react-router-dom";
const CategorySidebar = () => {
  return (
    <div className="category-sidebar">
      {/* Render category links */}
      <ul>
        <li>
          <Link to="/category1">Category 1</Link>
        </li>
        <li>
          <Link to="/category2">Category 2</Link>
        </li>
        {/* Add more categories */}
      </ul>
    </div>
  );
};

export default CategorySidebar;
