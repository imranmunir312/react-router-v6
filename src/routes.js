import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink as Link,
} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Homepage from "./components/Homepage";
import ProductItem from "./components/ProductItem";
import Products from "./components/Products";
import Variant from "./components/Variant";

const RouterConfig = () => {
  return (
    <Router>
      <ul className="Navbar">
        <li>
          <Link to="/" as="a">
            Homepage
          </Link>
        </li>
        <li>
          <Link to="contact" as="a">
            Contact
          </Link>
        </li>
        <li>
          <Link to="/products" as="a">
            Products
          </Link>
        </li>
        <li>
          <Link to="aboutus" as="a">
            About us
          </Link>
        </li>
      </ul>

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/products">
          <Route path="/" element={<Products />} />
          <Route path="/:productId" element={<ProductItem />}>
            <Route path="/:varaintId" element={<Variant />} />
          </Route>
        </Route>
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </Router>
  );
};

export default RouterConfig;
