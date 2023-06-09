import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
const AddProduct = (props) => {
  const navigate = useNavigate();
  const { onAdd } = props;
  const [inputValue, setInputValue] = useState({});
  const onHandleChange = (e) => {
    // tạo ra 1 hàm onHandleChange để lấy giá trị input
    // setInputValue({ name: e.target.value });
    // lấy giá trị input và gán vào biến inputValueFid
    const { name, value } = e.target;
    // dùng rest params để lấy lại giá trị của inputValue được lấy và set lại trước đó
    // rồi tạo ra 1 mảng mới, thêm object mới ở input vừa nhập lần cuối cùng
    setInputValue({ ...inputValue, [name]: value });
  };
  const onHandleSubmit = (e) => {
    // tạo ra 1 hàm onHandleSubmit để submit form
    e.preventDefault();
    console.log(inputValue);
    onAdd(inputValue);
    alert("Add product successfully🎉");
    navigate("/admin/product/list");
  };

  return (
    <div>
      <div className="container mt-4">
        <div className="w-50 mx-auto">
          <form id="form-add" action="" onSubmit={onHandleSubmit}>
            <h4 className="text-uppercase text-info font-weight-bolder">
              Add Product
            </h4>
            <div className="mb-3 mt-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
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
                id="price"
                name="price"
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
                id="description"
                name="description"
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
                onChange={onHandleChange}
              />
            </div>
            <button type="submit" className="btn btn-info d-block mx-auto">
              Create
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
