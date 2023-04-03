import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ICategory } from "../../types/category";
interface IProps {
  categories: ICategory[];
  onDelete: (id: string) => void;
}
const ListCategory = (props: IProps) => {
  //get and set categories
  const [categories, setCategories] = useState<ICategory[]>([]);
  useEffect(() => {
    setCategories(props.categories);
  }, [props]);

  //delete category
  const onHandleDelete = (id: string) => {
    props.onDelete(id);
  };
  return (
    <div className="container mt-3">
      <h3 className="text-center py-3 text-info text-uppercase">
        <i className="bi bi-list-ol mr-2"></i>Danh sách danh mục
      </h3>
      <table className="table text-center">
        <thead>
          <tr>
            <th scope="col">STT</th>
            <th scope="col">Tên</th>
            <th scope="col">Tác vụ</th>
          </tr>
        </thead>
        {categories?.map((category, i) => {
          return (
            <tbody key={category._id}>
              <tr>
                <th scope="row">{i + 1}</th>
                <td>{category.name}</td>
                <td>
                  <button
                    className="btn text-danger"
                    onClick={() => {
                      onHandleDelete(category._id);
                    }}
                  >
                    <i className="bi bi-trash"></i>
                  </button>
                  <Link
                    to={`/admin/categories/${category._id}/update`}
                    className="btn text-warning"
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
  );
};

export default ListCategory;
