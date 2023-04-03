import React from "react";
import { Outlet } from "react-router-dom";

const AdminLayout = (props) => {
  const { user } = props;
  console.log(user);
  if (user.role !== "admin") {
    return (
      <div>
        <h2 className="text-danger">cut </h2>
      </div>
    );
  }
  return (
    <div>
      {/* HEADER */}
      <header className="navbar-light bg-light">
        <nav className="navbar navbar-expand-lg container">
          <a className="navbar-brand font-weight-bold" href="/admin">
            Phuong.
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
              <li className="nav-item active">
                <a className="nav-link" href="/admin">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/admin/products"
                  role="button"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  Product
                </a>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="/admin/product/add">
                    Add Product
                  </a>
                  <a className="dropdown-item" href="/admin/product/list">
                    List Product
                  </a>
                </div>
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
      <main>
        <Outlet />
      </main>
      {/* FOOTER */}
      <footer className="page-footer font-small bg-light text-dark mt-4">
        <div className="footer-copyright text-center py-3">
          © 2023 Copyright:
          <a href="/admin" className="font-weight-bold text-dark ml-1">
            Phuong.
          </a>
        </div>
      </footer>
    </div>
  );
};

export default AdminLayout;
