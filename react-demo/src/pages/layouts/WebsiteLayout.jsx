import React from "react";
import { Outlet } from "react-router-dom";

const WebsiteLayout = () => {
  return (
    <div>
      {/* HEADER */}
      <header className="bg-dark">
        <nav className="navbar navbar-expand-lg navbar-dark container">
          <a className="navbar-brand font-weight-bold" href="/">
            PhuongStore.
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/product">
                  Product
                </a>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-primary my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </nav>
      </header>
      {/* CONTENT */}
      <main>
        <Outlet />
      </main>
      {/* FOOTER */}
      <footer className="bg-dark text-center">
        <div className="text-center p-3 text-white">
          © 2023 Copyright:
          <a className="text-white ml-1 font-weight-bold" href="/">
            Phuong.
          </a>
        </div>
      </footer>
    </div>
  );
};

export default WebsiteLayout;
