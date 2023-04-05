import { Routes, Route, useNavigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { useEffect, useState } from "react";

// components
import Products from "./pages/Products";
import ClientLayout from "./pages/layouts/ClientLayout";
import ProductDetail from "./pages/ProductDetail";
import AdminLayout from "./pages/layouts/AdminLayout";
import DashBoard from "./pages/admin/DashBoard";
import ListProduct from "./pages/admin/ListProduct";
import AddProduct from "./pages/admin/AddProduct";
import UpdateProduct from "./pages/admin/UpdateProduct";
import SignUp from "./pages/auth/SignUp";
import SignIn from "./pages/auth/SignIn";
import ListCategory from "./pages/admin/ListCategory";
import AddCategory from "./pages/admin/AddCategory";
import PageNotFound from "./pages/PageNotFound";

//ant design
import { message } from "antd";

// type product
import { IProduct } from "./types/product";
import { ICategory } from "./types/category";

// type user
import { SignInUser, SignUpUser, UserLogged } from "./types/user";

// api user
import { signIn, signUp } from "./api/user";
// api product
import {
  addProduct,
  deleteProduct,
  getAllProduct,
  updateProduct,
} from "./api/product";
// api category
import {
  addCategory,
  deleteCategory,
  getAllCategory,
  updateCategory,
} from "./api/category";
import UpdateCategory from "./pages/admin/UpdateCategory";

// APP
function App() {
  const navigate = useNavigate();
  const [products, setProducts] = useState<IProduct[]>([]);
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [user, setUser] = useState<UserLogged>();

  //GET ALL PRODUCT
  useEffect(() => {
    (async () => {
      try {
        const { data } = await getAllProduct();
        const { products } = data;
        setProducts(products);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  // ADD PRODUCT
  const onHandleAddProduct = async (product_param: IProduct) => {
    try {
      const { data } = await addProduct(product_param);
      const { product } = data;
      //check nếu có mảng products thì lấy lại toàn bộ mảng đó và push thêm phần tử vừa thêm vào
      // rồi set lại mảng products sau đó render lại ra màn hình
      if (products) {
        setProducts([...products, product]);
      } else {
        setProducts([product]);
      }
      message.info("Thêm sản phẩm thành công");
      navigate("/admin/products");
    } catch (error) {
      console.log(error);
    }
  };

  // UPDATE PRODUCT
  const onHandleUpdateProduct = async (product_param: IProduct) => {
    try {
      const { data } = await updateProduct(product_param);
      const { product: productUpdated } = data;
      setProducts(
        products.map((product) =>
          product._id == productUpdated._id ? productUpdated : product
        )
      );
      message.info("Cập nhật sản phẩm thành công");
      navigate("/admin/products");
    } catch (error) {
      console.log(error);
    }
  };

  //DELETE PRODUCT
  const onHandleDeleteProduct = async (id: string) => {
    try {
      await deleteProduct(id);
      setProducts(products.filter((product) => product._id != id));
      message.info("Xóa sản phẩm thành công");
    } catch (error) {
      console.log(error);
    }
  };

  // SIGN UP
  const onHandleSignUp = async (data_user: SignUpUser) => {
    try {
      await signUp(data_user);
      message.info("Đăng ký tài khoản thành công. Vui lòng đăng nhập");
      navigate("/signin");
    } catch (error) {
      console.log(error);
    }
  };
  console.log();

  //SIGN IN
  const onHandleSignIn = async (data_user: SignInUser) => {
    try {
      const { data } = await signIn(data_user);
      localStorage.setItem("token", JSON.stringify(data.token));
      localStorage.setItem("user", JSON.stringify(data.user));
      message.info("Đăng nhập tài khoản thành công");
      data.user.role === "admin" ? navigate("/admin") : navigate("/");
      window.location.reload();
    } catch (error: any) {
      console.log(error);
    }
  };

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")!));
  }, [localStorage.getItem("user")]);

  // GET ALL CATEGORY
  useEffect(() => {
    (async () => {
      try {
        const { data } = await getAllCategory();
        const { categories } = data;
        setCategories(categories);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  // ADD CATEGORY
  const onHandleAddCategory = async (category_param: ICategory) => {
    try {
      const { data } = await addCategory(category_param);
      const { category } = data;
      if (categories) {
        setCategories([...categories, category]);
      } else {
        setCategories([category]);
      }
      message.info("Thêm danh mục thành công");
      navigate("/admin/categories");
    } catch (error) {
      console.log(error);
    }
  };

  // UPDATE CATEGORY
  const onHandleUpdateCategory = async (category_param: ICategory) => {
    try {
      const { data } = await updateCategory(category_param);
      const { category: categoryUpdated } = data;
      setCategories(
        categories.map((category) =>
          category._id === categoryUpdated._id ? categoryUpdated : category
        )
      );
      message.info("Cập nhật danh mục thành công");
      navigate("/admin/categories");
    } catch (error) {
      console.log(error);
    }
  };

  // DELETE CATEGORY
  const onHandleRemoveCategory = async (id: string) => {
    try {
      await deleteCategory(id);
      setCategories(categories.filter((category) => category._id !== id));
      message.info("Xóa danh mục thành công");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="App">
      <Routes>
        {/* CLIENT */}
        <Route path="/" element={<ClientLayout />}>
          <Route index element={<HomePage />} />
          <Route path="products">
            <Route index element={<Products products={products} />} />
            <Route
              path=":id"
              element={
                <ProductDetail products={products} categories={categories} />
              }
            />
          </Route>
          <Route
            path="/signup"
            element={<SignUp onSignUp={onHandleSignUp} />}
          />
          <Route
            path="/signin"
            element={<SignIn onSignIn={onHandleSignIn} />}
          />
        </Route>
        {/* END CLIENT */}

        {/* ADMIN */}
        <Route path="/admin" element={<AdminLayout user={user!} />}>
          <Route index element={<DashBoard />} />
          {/* products */}
          <Route path="products">
            <Route
              index
              element={
                <ListProduct
                  products={products}
                  categories={categories}
                  onDelete={onHandleDeleteProduct}
                />
              }
            />
            <Route
              path="add"
              element={
                <AddProduct
                  onAdd={onHandleAddProduct}
                  categories={categories}
                />
              }
            />
            <Route
              path=":id/update"
              element={
                <UpdateProduct
                  onUpdate={onHandleUpdateProduct}
                  products={products}
                  categories={categories}
                />
              }
            />
          </Route>
          {/*end products */}

          {/* categories */}
          <Route path="categories">
            <Route
              index
              element={
                <ListCategory
                  categories={categories}
                  onDelete={onHandleRemoveCategory}
                />
              }
            />
            <Route
              path="add"
              element={<AddCategory onAdd={onHandleAddCategory} />}
            />
            <Route
              path=":id/update"
              element={
                <UpdateCategory
                  categories={categories}
                  onUpdate={onHandleUpdateCategory}
                />
              }
            />
          </Route>
          {/* end categories */}
        </Route>
        {/* END ADMIN */}

        {/* NOT FOUND ROUTE */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
