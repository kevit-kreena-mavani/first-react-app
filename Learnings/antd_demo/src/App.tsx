import React, { useState } from "react";
import "./App.css";
import { Button, Dropdown, Layout, Menu, Popover } from "antd";
import Sider from "antd/es/layout/Sider";
import type { MenuProps } from "antd";
import {
  HomeOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
  BellFilled,
} from "@ant-design/icons";
import LoginForm from "./Form";
import { Header } from "antd/es/layout/layout";
import LoginModal from "./login";

const menuItemLabel = (data: any) => {
  return <div>{data?.first_name}</div>;
};

function App() {
  const [collapsed, setCollapsed] = useState(true);
  const [open, setOpen] = useState(false);

  type MenuItem = Required<MenuProps>["items"][number];

  function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[]
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
    } as MenuItem;
  }

  const items: MenuItem[] = [
    getItem("Dashboard", "1", <PieChartOutlined />),
    getItem("User", "sub1", <UserOutlined />),
    getItem("Team", "sub2", <TeamOutlined />),
    getItem("Files", "9", <FileOutlined />),
  ];

  const getAllNotifications = async () => {
    const response = await fetch("https://reqres.in/api/users");
    const jsonData = await response.json();
    console.log(jsonData);
  };

  return (
    <div className="App">
      <Layout>
        <Header
          style={{
            backgroundColor: "#1554ad",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "50px",
            padding: "0px 78px",
          }}
        >
          <Dropdown menu={{ items }}>
            <Button type="primary">
              <HomeOutlined />
              Select Organization
            </Button>
          </Dropdown>

          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <Popover
              placement="topRight"
              title="Notifications"
              content={<div>demo</div>}
              trigger="click"
            >
              <BellFilled style={{ fontSize: "20px", color: "white" }} />
            </Popover>
            <Button type="primary" onClick={() => setOpen(true)}>
              <UserOutlined /> login
            </Button>
          </div>
        </Header>

        <Layout style={{ height: "calc( 100vh - 50px)" }}>
          <Sider
            collapsible
            collapsed={collapsed}
            onCollapse={(value) => setCollapsed(value)}
          >
            <div className="demo-logo-vertical" />
            <Menu
              theme="dark"
              defaultSelectedKeys={["1"]}
              mode="inline"
              items={items}
            />
          </Sider>
          <LoginForm />
        </Layout>
        <LoginModal open={open} setOpen={setOpen} />
      </Layout>
    </div>
  );
}

export default App;
