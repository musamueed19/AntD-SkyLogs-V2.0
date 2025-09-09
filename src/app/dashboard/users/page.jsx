"use client";

import CreateUser from "@/components/CreateUser";
import UserTable from "@/components/UserTable";
import { Button, Flex, Modal } from "antd";
import { useState } from "react";

const UsersPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="">
      <h1 className="font-medium text-2xl mb-6">Users</h1>

      <Flex className="w-full" justify="end">
        <Button type="primary" onClick={() => showModal()}>
          Create User
        </Button>
      </Flex>

      {/* UserTable */}
      <UserTable />

      <Modal
        title="Create User"
        closable={{ "aria-label": "Custom Close Button" }}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <CreateUser />
      </Modal>
    </div>
  );
};

export default UsersPage;
