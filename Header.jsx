import React from "react";
import logo from "../assets/logo.png";

function Header({ selectedtab, setSelectedtab }) {
  return (
    <nav className=" navbar navbar-expand-lg bg-body-tertiary main-header">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src={logo}
            style={{ width: "60px", height: "60px" }}
            alt="logo"
          />
        </a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li onClick={() => setSelectedtab("Home")}>
              <a className="nav-link nav-item" aria-current="page" href="#">
                <button type="button" class="btn btn-light">
                  Home
                </button>
              </a>
            </li>
            <li onClick={() => setSelectedtab("Contact_page")}>
              <a className="nav-link nav-item" href="#">
              <button type="button" class="btn btn-light">Contact Us</button>
              </a>
            </li>
            <li onClick={() => setSelectedtab("Main_page")}>
              <a className="nav-link nav-item" href="#">
              <button type="button" class="btn btn-light">Developers</button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
