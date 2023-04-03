import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Product from "./pages/Product";
import ProductDetail from "./pages/ProductDetail";
import ListProduct from "./pages/admin/ListProduct";
import {
  getAllProduct,
  deleteProduct,
  addProduct,
  updateProduct,
} from "./api/product";
import "./css/product.css";
import DashBoard from "./pages/admin/DashBoard";
import AddProduct from "./pages/admin/AddProduct";
import EditProduct from "./pages/admin/EditProduct";
import SignUp from "./pages/auth/SignUp";
import axios from "axios";
import SignIn from "./pages/auth/SignIn";
import { useNavigate } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";
import WebsiteLayout from "./pages/layouts/WebsiteLayout";
import AdminLayout from "./pages/layouts/AdminLayout";

function App() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [user, setUser] = useState({});

  //GET PRODUCT
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await getAllProduct();
        const { products } = data;
        setProducts(products);
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
        setProducts(products.filter((product) => product._id !== id));
      }
    } catch (error) {
      alert(`Happened error: ${error.message} 😞`);
    }
  };

  // ADD PRODUCT
  const onHandleAdd = async (product) => {
    await addProduct(product);
    const { data } = await getAllProduct();
    const { products } = data;
    setProducts(products);
  };

  // UPDATE PRODUCT
  const onHandleUpdate = async (product) => {
    try {
      const { data: productUpdated } = await updateProduct(product);
      const { product: newproduct } = productUpdated;
      alert("update product successfully🎉");
      const newProducts = products.map((product) =>
        product._id === newproduct._id ? newproduct : product
      );
      setProducts(newProducts);
    } catch (error) {
      alert("Update error: " + error.message);
    }
  };
  //  SIGN UP
  const onHandleSignUp = async (user) => {
    try {
      const response = await axios.post(
        `http://localhost:8080/auth/signup`,
        user
      );
      const token = response.data.token;
      localStorage.setItem("token", token);
      alert("Sign Up Successfully🎉 Please login to your account 🤗");
    } catch (error) {
      alert("Sign Up error: " + error.message);
    }
  };
  // SIGN IN

  const onHandleSignIn = async (user) => {
    try {
      const response = await axios.post(
        `http://localhost:8080/auth/signin`,
        user
      );
      const token = response.data.token;
      const res_user = response.data.user;
      localStorage.setItem("token", JSON.stringify(token));
      localStorage.setItem("user", JSON.stringify(res_user));
      res_user.role == "admin" ? navigate("/admin") : navigate("/");
      alert("Login successfully🎉");
    } catch (error) {
      console.log("Sign In error: " + error.message);
      alert(error?.response?.data);
    }
  };
  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser));
    }
  }, []);

  //check quyền truy cập admin
  // const AdminWrapper = () => {
  //   const isAdmin = localStorage.getItem("token");
  //   return isAdmin ? <Outlet /> : <Navigate to="/" replace />;
  // };
  return (
    <Routes>
      {/* ROUTER CLIENT */}
      <Route path="/" element={<WebsiteLayout />}>
        <Route index element={<HomePage />} />
        {/* product router */}
        <Route path="product">
          <Route index element={<Product products={products} />} />
          <Route path=":id" element={<ProductDetail />} />
        </Route>
        {/* end product router */}

        {/* account */}
        <Route path="signup" element={<SignUp onSignUp={onHandleSignUp} />} />
        <Route path="signin" element={<SignIn onSignIn={onHandleSignIn} />} />
        {/* end account */}
      </Route>
      {/* ROUTER ADMIN */}
      <Route path="/admin" element={<AdminLayout user={user} />}>
        <Route index element={<DashBoard />} />
        {/* product admin */}
        <Route path="product">
          <Route path="add" element={<AddProduct onAdd={onHandleAdd} />} />
          <Route
            path="list"
            element={
              <ListProduct products={products} onRemove={onHandleRemove} />
            }
          />
          <Route path="edit">
            <Route
              path=":id"
              element={<EditProduct onUpdate={onHandleUpdate} />}
            ></Route>
          </Route>
        </Route>
        {/* product admin */}
      </Route>
      <Route path="*" element={<PageNotFound />}></Route>
    </Routes>
  );
}
export default App;
