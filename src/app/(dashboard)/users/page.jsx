"use client";

import TableViewTabs from "@/components/TableViewTabs";
import CreateUser from "@/components/userModule/CreateUser";
import EditUser from "@/components/userModule/EditUser";
import UserTable from "@/components/userModule/UserTable";
import { Button, Flex, Modal } from "antd";
import { useState } from "react";

const UsersPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState("");

  const handleOk = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="">
      <h1 className="font-medium text-2xl mb-6">Users</h1>

      <div className="flex items-center justify-end gap-x-3 w-full">
        {/* Add Buttion */}
        <Button
          type="primary"
          onClick={() => {
            setIsModalOpen(true);
            setModalType("add");
          }}
        >
          Create User
        </Button>
      </div>

      {/* UserTable */}
      <UserTable setModalType={setModalType} setIsModalOpen={setIsModalOpen} />

      <Modal
        closable={{ "aria-label": "Custom Close Button" }}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleOk}
        footer={null}
      >
        {modalType === "add" ? (
          <CreateUser />
        ) : (
          modalType === "edit" && <EditUser />
        )}
      </Modal>
    </div>
  );
};

export default UsersPage;
