import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    try {
      (async () => {
        const { data: product } = await axios.get(
          `http://localhost:8080/api/products/${id}`
        );
        setProduct(product);
      })();
    } catch (error) {
      console.log(error.message);
    }
  }, []);
  return (
    <div>
      <div className="container">
        <div className="mt-3">
          <h3 className="text-info">{product.name}</h3>
          <div className="card-img-top img-product">
            <img src={product.image} alt="Product's Image" />
          </div>
          <div className="card-body">
            <h4 className="card-text text-danger font-weight-bolder">
              {product.price?.toLocaleString("vi-VN", {
                style: "currency",
                currency: "VND",
              })}
            </h4>
            <p className="card-text">{product.description}</p>
            <button className="btn btn-info">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
