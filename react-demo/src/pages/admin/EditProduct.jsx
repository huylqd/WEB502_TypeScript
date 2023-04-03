import React, { useEffect, useState } from "react";

import { useParams, useNavigate } from "react-router-dom";
import { getOneProduct } from "../../api/product";
const EditProduct = (props) => {
  const { id } = useParams();
  const { onUpdate } = props;
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    name: "",
    price: "",
    description: "",
    image: "",
  });
  const [inputValue, setInputValue] = useState({});
  useEffect(() => {
    const getData = async () => {
      const { data: oneproduct } = await getOneProduct(id);
      setProduct(oneproduct);
    };
    getData();
  }, [props]);

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    const productUpdate = { ...product, ...inputValue };
    onUpdate(productUpdate);
    navigate("/admin/product/list");
  };
  return (
    <div>
      <div className="container mt-4">
        <div className="w-50 mx-auto">
          <form onSubmit={onHandleSubmit}>
            <h4 className="text-uppercase text-warning font-weight-bolder">
              Update Product
            </h4>
            <div className="mb-3 mt-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                name="name"
                defaultValue={product?.name}
                onChange={onHandleChange}
              />
            </div>
            <div className="mb-3 mt-3">
              <label htmlFor="price" className="form-label">
                Price
              </label>
              <input
                type="text"
                className="form-control"
                name="price"
                defaultValue={product?.price}
                onChange={onHandleChange}
              />
            </div>
            <div className="mb-3 mt-3">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <input
                type="text"
                className="form-control"
                name="description"
                defaultValue={product?.description}
                onChange={onHandleChange}
              />
            </div>
            <div className="mb-3 mt-3">
              <label htmlFor="image" className="form-label">
                Image
              </label>
              <input
                type="text"
                className="form-control"
                id="image"
                name="image"
                defaultValue={product?.image}
                onChange={onHandleChange}
              />
              <div className="td-image mt-3">
                <img src={product.image} alt="Product's image" />
              </div>
            </div>
            <button type="submit" className="btn btn-warning d-block mx-auto">
              Create
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
