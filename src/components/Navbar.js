import React from "react";
import {Link} from "react-router-dom"

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/Intro">
          RELUSUS
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link "  to='/HomePage'>
                Customers
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="/Employees">
                Employees 
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Offices">
                Offices
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link "  to="/OrderDetails">
                Order Details
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link "  to="/Orders">
                Orders
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link "  to="/Payments">
                Payments 
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link "  to="/ProductLines">
                Product Lines 
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link "  to="/Products">
                Products 
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
