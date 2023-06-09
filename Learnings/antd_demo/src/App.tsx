import React, { useCallback, useEffect, useState } from "react";
import "./App.css";
import { Avatar, Button, Dropdown, Layout, Menu, Popover } from "antd";
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

const Notification = ({ data }: any) => {
  return (
    <div key={data?.id} className="notification">
      <Avatar src={data?.avatar} size="large" />
      <div>
        <div>
          {data?.first_name} {data?.last_name}
        </div>
        <div className="comment-text">{data?.email}</div>
      </div>
    </div>
  );
};

function App() {
  const [collapsed, setCollapsed] = useState(true);
  const [open, setOpen] = useState(false);
  const [notificationList, setNotificationList] = useState<object[]>([]);

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

  const items2: MenuItem[] = [
    getItem("Organization 1", "1"),
    getItem("Organization 2", "2"),
    getItem("Organization 3", "3"),
  ];

  const getAllNotifications = async () => {
    const response = await fetch("https://reqres.in/api/users");
    const jsonData = await response.json();

    setNotificationList(jsonData?.data);
  };

  const handleScroll = useCallback(
    async (e: any) => {
      if (
        e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight &&
        notificationList?.length < 7
      ) {
        const response = await fetch("https://reqres.in/api/users?page=2");
        const jsonData = await response.json();

        setNotificationList((prev: object[]) => [...prev, ...jsonData.data]);
      }
    },
    [notificationList]
  );

  useEffect(() => {
    getAllNotifications();
  }, []);

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
          <Dropdown menu={{ items: items2 }}>
            <Button type="primary">
              <HomeOutlined />
              Select Organization
            </Button>
          </Dropdown>

          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <Popover
              placement="topRight"
              title="Notifications"
              content={
                <div className="notification-container" onScroll={handleScroll}>
                  {notificationList?.map((notification) => (
                    <Notification data={notification} />
                  ))}
                </div>
              }
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
