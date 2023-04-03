import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IProduct } from "../types/product";
import { ICategory } from "../types/category";
interface Iprops {
  products: IProduct[];
  categories: ICategory[];
}
const ProductDetail = (props: Iprops) => {
  const { id } = useParams();
  const [product, setProduct] = useState<IProduct>();
  const [categories, setCategories] = useState<ICategory[]>();

  //get one product
  useEffect(() => {
    setProduct(props.products?.find((product) => product._id === id));
  }, [props]);

  //get one product
  useEffect(() => {
    setCategories(props.categories);
  }, [props]);

  //find one category and get name of category
  const cateName = categories?.find((category) => {
    return category._id === product?.categoryId;
  });
  return (
    <div className="container my-3">
      <h5>{product?.name}</h5>
      <div className="wrap-img-price">
        <div className="mt-3 product-image">
          <img src={product?.image} alt="product's image" />
        </div>
        <div className="d-flex justify-content-between">
          <p className="text-danger font-weight-bolder mt-3">
            {product?.price.toLocaleString("vi-VN", {
              style: "currency",
              currency: "VND",
            })}
          </p>

          <p className="text-info font-weight-bolder mt-3">{cateName?.name}</p>
        </div>
      </div>
      <p>{product?.description}</p>
      <button className="btn btn-info">Mua ngay</button>
    </div>
  );
};

export default ProductDetail;
