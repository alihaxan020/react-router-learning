import React from "react";
import { Link, Outlet } from "react-router-dom";

const Products = () => {
  return (
    <React.Fragment>
      <div>
        <input type="search" placeholder="Search products here" />
      </div>
      <nav>
        <Link to="featured">Featured</Link>
        <Link to="new">New</Link>
      </nav>
      <Outlet />
    </React.Fragment>
  );
};

export default Products;
