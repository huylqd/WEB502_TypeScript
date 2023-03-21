import React from "react";

const Header = () => {
  return (
    <div className="navbar-light bg-light">
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
                <a className="dropdown-item" href="/admin/products/add">
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
    </div>
  );
};

export default Header;
