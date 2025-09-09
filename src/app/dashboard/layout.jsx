"use client";

import Sidebar from "@/components/Sidebar";
import { Button, Layout } from "antd";
import { useState } from "react";

// icons
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";

const { Sider, Header, Content } = Layout;

const DashboardLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout>
      <Sider
        theme="light"
        trigger={null}
        collapsible
        collapsed={collapsed}
        className="sticky min-h-screen h-fit left-0 top-0 bottom-0"
        style={{
          backgroundColor: "#3558BE",
        }}
      >
        <Sidebar collapsed={collapsed} />
        <Button
          style={{
            position: "fixed",
            bottom: "10px",
            left: "10px",
            fontSize: "18px",
          }}
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => setCollapsed(!collapsed)}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            paddingTop: "12px",
            backgroundColor: "#fff",
          }}
        ></Header>
        <Content className="p-5">
          <div>{children}</div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
