// import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/admin/Footer";
import Header from "../../components/admin/Header";
const ListProduct = (props) => {
  //gan onHandleRemove vao 1 cai bien
  const { onRemove } = props;

  //khoi tao state products
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setProducts(props.products);
  }, [props]);

  //REMOVE PRODUCT
  const removeProduct = (id) => {
    onRemove(id);
  };
  return (
    <div>
      <Header />
      <div className="container mt-4">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Description</th>
              <th scope="col">Image</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          {products.map((product, i) => {
            return (
              <tbody key={product.id}>
                <tr>
                  <th scope="row">{i + 1}</th>
                  <td>{product.name}</td>
                  <td>
                    {product.price.toLocaleString("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    })}
                  </td>
                  <td>{product.description}</td>
                  <td className="td-image">
                    <img src={product.image} alt="Product's image" />
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        removeProduct(product.id);
                      }}
                    >
                      <i className="bi bi-trash"></i>
                    </button>
                    <Link
                      to={`/admin/products/edit/${product.id}`}
                      className="btn btn-warning ml-2"
                    >
                      <i className="bi bi-pencil-square"></i>
                    </Link>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
      <Footer />
    </div>
  );
};

export default ListProduct;
