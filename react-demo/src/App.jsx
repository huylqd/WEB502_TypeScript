import { useEffect, useState } from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Product from "./pages/Product";
import ProductDetail from "./pages/ProductDetail";
import ListProduct from "./pages/admin/ListProduct";
import { getAllProduct, deleteProduct } from "./api/product";
import "./css/product.css";
import DashBoard from "./pages/admin/DashBoard";
import AddProduct from "./pages/admin/AddProduct";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: product } = await getAllProduct();
        setProducts(product);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  // REMOVE PRODUCT
  const onHandleRemove = async (id) => {
    try {
      const confirmRe = window.confirm(
        "Are you sure you want to remove this product?"
      );
      if (confirmRe) {
        await deleteProduct(id);
        alert(`Remove product successfully🎉`);
        setProducts(products.filter((product) => product.id !== id));
      }
    } catch (error) {
      alert(`Happened error: ${error.message} 😞`);
    }
  };
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/product" element={<Product products={products} />}></Route>
      <Route path="/product/:id" element={<ProductDetail />}></Route>
      {/* ROUTER ADMIN */}
      <Route path="/admin" element={<DashBoard />}></Route>
      <Route path="/admin/product/add" element={<AddProduct />}></Route>
      <Route
        path="/admin/product/list"
        element={<ListProduct products={products} onRemove={onHandleRemove} />}
      ></Route>
    </Routes>
  );
}
export default App;
