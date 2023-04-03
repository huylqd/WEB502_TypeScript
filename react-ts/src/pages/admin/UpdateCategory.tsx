import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { ICategory } from "../../types/category";
import { useParams } from "react-router-dom";
interface IProps {
  categories: ICategory[];
  onUpdate: (data: ICategory) => void;
}
const UpdateCategory = (props: IProps) => {
  const { id } = useParams();
  const { register, handleSubmit, reset } = useForm<ICategory>();

  useEffect(() => {
    const currentCategory = props.categories.find(
      (category) => category._id === id
    );
    reset(currentCategory);
  }, [props]);

  const onHandleSubmit = (data: ICategory) => {
    props.onUpdate(data);
  };
  return (
    <div className="container my-3">
      <h3 className="text-center py-3 text-info text-uppercase">
        <i className="bi bi-pencil-square mr-2"></i>Cập nhật danh mục
      </h3>
      <form className="w-50 mx-auto" onSubmit={handleSubmit(onHandleSubmit)}>
        <div className="form-group">
          <label htmlFor="name">Tên danh mục</label>
          <input type="text" className="form-control" {...register("name")} />
        </div>
        <button type="submit" className="btn btn-info">
          Cập nhật
        </button>
      </form>
    </div>
  );
};

export default UpdateCategory;
