import React from "react";
import { useForm } from "react-hook-form";
import { ICategory } from "../../types/category";
interface IProps {
  onAdd: (data: ICategory) => void;
}
const AddCategory = (props: IProps) => {
  const { register, handleSubmit } = useForm<ICategory>();
  const onHandleSubmit = (data: ICategory) => {
    props.onAdd(data);
  };
  return (
    <div className="container my-3">
      <h3 className="text-center py-3 text-info text-uppercase">
        <i className="bi bi-journal-plus mr-2"></i>Thêm danh mục
      </h3>
      <form className="w-50 mx-auto" onSubmit={handleSubmit(onHandleSubmit)}>
        <div className="form-group">
          <label htmlFor="name">Tên danh mục</label>
          <input type="text" className="form-control" {...register("name")} />
        </div>
        <button type="submit" className="btn btn-info">
          Thêm
        </button>
      </form>
    </div>
  );
};

export default AddCategory;
