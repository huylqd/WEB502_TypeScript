import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { IProduct } from "../../types/product";
import { ICategory } from "../../types/category";
interface Iprops {
  categories: ICategory[];
  products: IProduct[];
  onUpdate: (product: IProduct) => void;
}
const UpdateProduct = (props: Iprops) => {
  const { id } = useParams();
  const { register, handleSubmit, reset } = useForm<IProduct>();
  const [categories, setCategories] = useState<ICategory[]>([]);
  //get one product
  useEffect(() => {
    const currentProduct = props.products.find((product) => product._id === id);
    reset(currentProduct);
  }, [props]);

  //get all categories
  useEffect(() => {
    setCategories(props.categories);
  }, [props]);

  const onHandleSubmit: SubmitHandler<IProduct> = (data: IProduct) => {
    props.onUpdate(data);
  };
  return (
    <div className="container">
      <h3 className="text-center py-3 text-info text-uppercase">
        <i className="bi bi-pencil-square mr-2"></i>Cập nhật sản phẩm
      </h3>
      <form className="w-50 mx-auto" onSubmit={handleSubmit(onHandleSubmit)}>
        <div className="form-group">
          <label htmlFor="categoryId">Danh mục</label>
          <select className="form-control" {...register("categoryId")}>
            <option value={""}>Chọn danh mục</option>
            {categories.map((category) => {
              return (
                <option value={category._id} key={category._id}>
                  {category.name}
                </option>
              );
            })}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="name">Tên sản phẩm</label>
          <input type="text" className="form-control" {...register("name")} />
        </div>
        <div className="form-group">
          <label htmlFor="name">Giá sản phẩm</label>
          <input type="text" className="form-control" {...register("price")} />
        </div>
        <div className="form-group">
          <label htmlFor="name">Mô tả sản phẩm</label>
          <textarea
            className="form-control"
            rows={3}
            {...register("description")}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="name">Ảnh sản phẩm</label>
          <input type="text" className="form-control" {...register("image")} />
        </div>
        <div className="my-3">
          <img alt="product's image" className="img-list-pro" />
        </div>
        <button type="submit" className="btn btn-info">
          Cập nhật
        </button>
      </form>
    </div>
  );
};

export default UpdateProduct;
