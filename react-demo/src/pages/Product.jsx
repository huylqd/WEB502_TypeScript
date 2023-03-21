import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Product = (props) => {
  //khởi tạo data products để nhận dữ liệu từ props truyền vào
  const [products, setProducts] = useState([]);
  // sử dụng useEffect để thực hiện re-run với điều kiện là khi giá trị props được truyền vào trong mảng dependency có sự thay đổi,
  // sau đó thực hiện render dữ liệu của component là giá trị products đã được set lại qua hàm setProducts
  // nếu ko truyền vào mảng dependency 1 state là props mà truyền vào mảng rỗng thì useEffect chỉ thực thi 1 lần,
  // lúc đó component Product sẽ không được render lại
  // bởi vì useEffect nó không được chạy lại
  useEffect(() => {
    setProducts(props.products);
  }, [props]);

  return (
    <div className="bg-light">
      {/* HEADER */}
      <Header />
      {/* CONTENT */}
      <div className="App container mb-3">
        <h1 className="text-center text-info my-4 ">Products</h1>
        <div className="row">
          {products.map((product) => {
            return (
              <div
                key={product.id}
                className="col-xl-3 col-lg-4 col-md-4 col-sm-6 mx-0 px-2 mb-3"
              >
                <div className="card">
                  <div className="card-img-top">
                    <Link to={`/product/${product.id}`}>
                      <img src={product.image} alt="Product's Image" />
                    </Link>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">
                      <Link
                        to={`/products/${product.id}`}
                        className="name-product"
                      >
                        {product.name}
                      </Link>
                    </h5>
                    <p className="card-text text-danger font-weight-bolder">
                      {product.price.toLocaleString("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      })}
                    </p>
                    <p className="card-text">{product.description}</p>
                    <Link className="btn btn-primary">Buy Now</Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default Product;
