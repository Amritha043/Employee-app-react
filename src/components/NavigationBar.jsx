import React from "react";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <nav className="navbar navbar-expand-lg border-bottom">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          APPLICATION FORM
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                ADD EMPLOYEE
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/delete">
                DELETE EMPLOYEE
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/view">
                VIEW EMPLOYEE
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/search">
                SEARCH EMPLOYEE
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;