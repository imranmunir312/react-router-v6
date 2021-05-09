import React from "react";
import { NavLink as Link, Outlet } from "react-router-dom";

const Products = () => {
  return (
    <div>
      <h2>Products</h2>
      <ul>
        <li>
          <Link to="/products/1"> Product 1</Link>
        </li>
        <li>
          <Link to="/products/2"> Product 2</Link>
        </li>
        <li>
          <Link to="/products/3"> Product 3</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default Products;
