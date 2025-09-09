"use client";

import React, { useState } from "react";
import { Modal, Space, Table, Tag, Tooltip, Card, Tabs } from "antd";
import { rows } from "@/contants/userData";
import {
  EditOutlined,
  TableOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";
import TableViewTabs from "../TableViewTabs";

const UserTable = ({ setModalType, setIsModalOpen }) => {
  const [data, setData] = useState(rows);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [viewMode, setViewMode] = useState("table");

  const columns = [
    {
      title: "Sr.",
      dataIndex: "id",
      key: "id",
      sorter: (a, b) => a.id - b.id,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "id",
      sorter: (a, b) => a.name.localeCompare(b.name),
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Job Type",
      dataIndex: "jobType",
      key: "id",
    },
    {
      title: "Phone #",
      dataIndex: "phone",
      key: "id",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "id",
      filters: [
        { text: "Active", value: "Active" },
        { text: "Inactive", value: "Inactive" },
      ],
      onFilter: (value, record) => record.status === value,
    },
    {
      title: "Department",
      dataIndex: "department",
      key: "id",
      sorter: (a, b) => a.department.localeCompare(b.department),
    },
    {
      title: "Join Date",
      dataIndex: "joinDate",
      sorter: (a, b) => new Date(a.joinDate) - new Date(b.joinDate),
      key: "id",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <EditOutlined
            className="cursor-pointer"
            onClick={() => {
              setModalType("edit");
              setIsModalOpen(true);
            }}
          />
        </Space>
      ),
    },
  ];

  return (
    <div className="my-3">
      {/* 🔹 View Switcher */}
      <div className="flex justify-end gap-3 mb-3">
        <TableViewTabs viewMode={viewMode} setViewMode={setViewMode} />
      </div>

      {/* 🔹 Conditional Render */}
      {viewMode === "table" ? (
        <Table
          rowKey="id"
          columns={columns}
          dataSource={data}
          pagination={{
            page: page,
            pageSize: pageSize,
            onChange: (page, pageSize) => {
              setPage(page);
              setPageSize(pageSize);
            },
            total: data.length,
          }}
        />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.map((user) => (
            <Card
              key={user.id}
              title={user.name}
              extra={
                <EditOutlined
                  className="cursor-pointer"
                  onClick={() => {
                    setModalType("edit");
                    setIsModalOpen(true);
                  }}
                />
              }
            >
              <p>
                <b>Job:</b> {user.jobType}
              </p>
              <p>
                <b>Phone:</b> {user.phone}
              </p>
              <p>
                <b>Status:</b> {user.status}
              </p>
              <p>
                <b>Dept:</b> {user.department}
              </p>
              <p>
                <b>Join Date:</b> {user.joinDate}
              </p>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserTable;
