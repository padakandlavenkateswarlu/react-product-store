
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
      <div className="container">

        <Link className="navbar-brand" to="/">
          MyShop
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarMenu">

          <ul className="navbar-nav me-auto">

            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/products">
                Products
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/blog">
                Blog
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/profile">
                Profile
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/cart">
                Cart
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>

          </ul>

          <form className="d-flex me-3">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
            />

            <button
              className="btn btn-outline-light"
              type="button"
            >
              Search
            </button>
          </form>

          <div className="d-flex gap-2 mt-2 mt-lg-0">

            <Link
              className="btn btn-outline-light"
              to="/login"
              onClick={() => {}}
            >
              Login
            </Link>

            <Link
              className="btn btn-success"
              to="/login"
              onClick={() => {
                // Signup page select cheyadaniki
              }}
            >
              Signup
            </Link>

          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
