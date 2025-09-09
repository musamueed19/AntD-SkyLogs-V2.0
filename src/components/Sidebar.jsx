import { Flex, Menu } from 'antd'
import React from 'react'
import Logo from './Logo'
import { menuItems } from '@/contants/constants'

const Sidebar = ({ collapsed }) => {
  return (
    <>
      <Flex align="center" justify="center">
        <div className="my-5">
          <Logo
            src={
              collapsed
                ? "/images/logoIconWhite.svg"
                : "/images/fullLogoWhite.svg"
            }
            size={collapsed ? "40" : "140"}
          />
        </div>
      </Flex>

      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        className="flex flex-col gap-2 mt-6 font-medium"
        style={{
          fontSize: "16px",
          backgroundColor: "#3558BE",
          color: "#fff",
        }}
        items={menuItems}
      />
    </>
  );
};

export default Sidebar