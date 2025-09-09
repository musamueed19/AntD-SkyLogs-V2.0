import { Button, Switch } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import React from "react";

const AppHeader = ({ setTheme, setCollapsed, collapsed }) => {
  return (
    <div className="h-[60px] bg-headerBg">
      <div className="flex items-center justify-between h-[60px] bg-headerBg px-4 md:px-6">
        {/* Sidebar Collapse - Toggle Button */}
        <Button
          style={{
            fontSize: "18px",
          }}
          type="text"
          icon={
            collapsed ? (
              <MenuUnfoldOutlined color="#fff" />
            ) : (
              <MenuFoldOutlined color="#fff" />
            )
          }
          onClick={() => setCollapsed(!collapsed)}
        />

        {/* Theme Switch Button */}
        <Switch
          checkedChildren="Dark"
          unCheckedChildren="Light"
          onChange={(cheked) => {
            if (cheked) {
              setTheme("dark");
            } else {
              setTheme("light");
            }
          }}
        />
      </div>
    </div>
  );
};

export default AppHeader;
