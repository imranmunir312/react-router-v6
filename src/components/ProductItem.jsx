import React from "react";
import {
  useParams,
  NavLink as Link,
  Outlet,
  useResolvedPath,
  useLocation,
} from "react-router-dom";

const ProductItem = () => {
  console.log(useLocation());
  const { productId } = useParams();
  return (
    <div>
      This is a product item {productId}
      <ul>
        <li>
          <Link to={`${useLocation().pathname}/1`}>Varaint 1</Link>
        </li>
        <li>
          <Link to={`/products/${productId}/2`}>Varaint 2</Link>
        </li>
        <li>
          <Link to={`/products/${productId}/3`}>Varaint 3</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default ProductItem;
