import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { IProduct } from "../../types/product";
import { ICategory } from "../../types/category";
//  type of props
interface Iprops {
  categories: ICategory[];
  onAdd: (product: IProduct) => void;
}

const AddProduct = (props: Iprops) => {
  const [categories, setCategories] = useState<ICategory[]>([]);
  const { register, handleSubmit } = useForm<IProduct>();
  //register là hàm dể đăng ký các trường dữ liệu trong form
  //handleSubmit là hàm dể xử lý khi submit form
  const onHandleSubmit: SubmitHandler<IProduct> = (data: IProduct) => {
    props.onAdd(data);
  };

  //get all categories
  useEffect(() => {
    setCategories(props.categories);
  }, [props]);

  return (
    <div className="container">
      <h3 className="text-center py-3 text-info text-uppercase">
        <i className="bi bi-journal-plus mr-2"></i>Thêm sản phẩm
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
        <button type="submit" className="btn btn-info">
          Thêm
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
