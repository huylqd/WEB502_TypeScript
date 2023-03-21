import axios from "axios";
import React, { useEffect } from "react";
import Footer from "../../components/admin/Footer";
import Header from "../../components/admin/Header";
const AddProduct = () => {
  return (
    <div>
      <Header />
      <div className="container mt-4">
        <div className="w-50 mx-auto">
          <form id="form-add">
            <h4 className="text-uppercase text-info font-weight-bolder">
              Add Product
            </h4>
            <div className="mb-3 mt-3">
              <label htmlFor="name_pro" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name_pro"
                name="name_pro"
              />
            </div>
            <div className="mb-3 mt-3">
              <label htmlFor="price_pro" className="form-label">
                Price
              </label>
              <input
                type="text"
                className="form-control"
                id="price_pro"
                name="price_pro"
              />
            </div>
            <div className="mb-3 mt-3">
              <label htmlFor="desc_pro" className="form-label">
                Description
              </label>
              <input
                type="text"
                className="form-control"
                id="desc_pro"
                name="desc_pro"
              />
            </div>
            <div className="mb-3 mt-3">
              <label htmlFor="img_pro" className="form-label">
                Image
              </label>
              <input
                type="file"
                className="form-control"
                id="img_pro"
                name="img_pro"
              />
            </div>
            <button type="submit" className="btn btn-info d-block mx-auto">
              Create
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AddProduct;
