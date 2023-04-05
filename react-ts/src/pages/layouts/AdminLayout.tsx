// LAYOUT OF ANTD
import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { UserLogged } from "../../types/user";
import Nav from "../../components/admin/Nav";

//type Props
interface IProps {
  user: UserLogged;
}

//LAYOUT
const { Header, Content, Footer, Sider } = Layout;

const items2: MenuProps["items"] = [
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
].map((icon, index) => {
  const key = String(index + 1);

  return {
    key: `sub${key}`,
    icon: React.createElement(icon),
    label: `subnav ${key}`,

    children: new Array(4).fill(null).map((_, j) => {
      const subKey = index * 4 + j + 1;
      return {
        key: subKey,
        label: `option${subKey}`,
      };
    }),
  };
});

const AdminLayout = (props: IProps): any => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  //check out
  // const handleLogout = () => {
  //   // Xóa token khỏi state và localStorage
  //   localStorage.removeItem("token");
  //   localStorage.removeItem("user");
  // };
  //check login to admin or out
  const navigate = useNavigate();
  if (props.user?.role !== "admin") {
    return navigate("/");
  }
  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <Link to={"/admin"} className="logo-link">
          Phuong.
        </Link>

        {<Nav />}
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Admin</Breadcrumb.Item>
        </Breadcrumb>
        <Layout style={{ padding: "24px 0", background: colorBgContainer }}>
          <Sider style={{ background: colorBgContainer }} width={200}>
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1 "]}
              style={{ height: "100%" }}
              items={items2}
            />
          </Sider>
          <Content style={{ padding: "0 24px", minHeight: 280 }}>
            <Outlet />
          </Content>
        </Layout>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Copyright ©2023 by{" "}
        <Link to={"/admin"} className="ml-1 link-smaller">
          Phuong.
        </Link>
      </Footer>
    </Layout>
  );
};

export default AdminLayout;
