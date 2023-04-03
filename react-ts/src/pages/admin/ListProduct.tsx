import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { IProduct } from "../../types/product";
import { ICategory } from "../../types/category";

interface Iprops {
  products: IProduct[];
  categories: ICategory[];
  onDelete: (id: string) => void;
}
const ListProduct = (props: Iprops) => {
  //get and set products
  const [products, setProducts] = useState<IProduct[]>([]);
  const [categories, setCategories] = useState<ICategory[]>([]);

  //set products
  useEffect(() => {
    setProducts(props.products);
  }, [props]);

  //set categories
  useEffect(() => {
    setCategories(props.categories);
  }, [props]);

  //remove product
  const onHandleDelete = (id: string) => {
    props.onDelete(id);
  };
  return (
    <div className="container mt-3">
      <h3 className="text-center py-3 text-info text-uppercase">
        <i className="bi bi-list-ol mr-2"></i>Danh sách sản phẩm
      </h3>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">STT</th>
            <th scope="col">Tên</th>
            <th scope="col">Danh mục</th>
            <th scope="col">Giá</th>
            <th scope="col">Hình ảnh</th>
            <th scope="col">Tác vụ</th>
          </tr>
        </thead>
        {products?.map((product, i) => {
          const category = categories.find((item) => {
            return item._id === product.categoryId;
          });
          return (
            <tbody key={product._id}>
              <tr>
                <th scope="row">{i + 1}</th>
                <td>{product.name}</td>
                <td className="text-primary">{category?.name}</td>
                <td className="text-danger">
                  {product.price.toLocaleString("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  })}
                </td>

                <td>
                  <img
                    src={product.image}
                    alt="product's image"
                    className="img-list-pro"
                  />
                </td>
                <td>
                  <button
                    className="btn text-danger"
                    onClick={() => {
                      onHandleDelete(product._id);
                    }}
                  >
                    <i className="bi bi-trash"></i>
                  </button>
                  <Link
                    to={`/admin/products/${product._id}/update`}
                    className="text-warning"
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

export default ListProduct;
