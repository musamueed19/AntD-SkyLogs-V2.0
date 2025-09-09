"use client";

import Sidebar from "@/components/Sidebar";
import { Button, Layout } from "antd";
import { useState } from "react";

// icons
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import AppHeader from "@/components/AppHeader";

const { Sider, Header, Content } = Layout;

const DashboardLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [theme, setTheme] = useState("light");

  return (
    <Layout>
      <Sider
        breakpoint="md"
        theme={theme}
        trigger={null}
        collapsible
        collapsed={collapsed}
        className="sticky min-h-screen h-fit left-0 top-0 bottom-0"
        style={{
          backgroundColor: "#3558BE",
        }}
      >
        <Sidebar theme={theme} collapsed={collapsed} />
        <Button
          style={{
            position: "fixed",
            bottom: "10px",
            left: "10px",
            fontSize: "18px",
          }}
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined color="#fff" /> : <MenuFoldOutlined color="#fff" />}
          onClick={() => setCollapsed(!collapsed)}
        />
      </Sider>
      <Layout theme={theme}>
        <Header
          theme={theme}
          style={{
            paddingBottom: "12px",
            backgroundColor: "#fff",
          }}
        >
          <AppHeader setTheme={setTheme} />
        </Header>
        <Content className="p-5" theme={theme}>
          <main>{children}</main>
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
