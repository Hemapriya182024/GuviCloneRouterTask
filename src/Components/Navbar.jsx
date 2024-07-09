import React from "react";
import { NavLink, Outlet } from "react-router-dom"; 
import '../App.css'


const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg h-100 shadow p-1 mb-5 bg-body-tertiary rounded">
        <div className="container-fluid h-100">
          <a className="navbar-brand col-1" href="#">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAN0W0Xf26PSDwSbcIj4WD2PxwqT0WGcEeTg&s" 
              className="img-fluid transparent-bg" 
              alt="description"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="blogs/all">
                  Blogs
                </NavLink>
              </li>
            </ul>
            <form className="d-flex search-form" role="search">
              <input
                className="form-control me-2  "
                type="search"
                placeholder="What to do want to learn?"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="button">
              &#128269;
              </button>
            </form>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;