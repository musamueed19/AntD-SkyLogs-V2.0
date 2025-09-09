"use client";

import React, { useState } from "react";
import { Space, Table, Tag } from "antd";
import { rows } from "@/contants/userData";

export const columns = [
  {
    title: "Sr.",
    dataIndex: "id",
    key: "id",
    sorter: (a, b) => a.id > b.id
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "id",
    sorter: (a, b) => a.name > b.name,
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
      {text: "Active", value: "Active"},
      {text: "Inactive", value: "Inactive"},
    ],
    onFilter: (value, record) => {
      return record.status === value;
    }
  },
  {
    title: "Department",
    dataIndex: "department",
    key: "id",
    sorter: (a, b) => a.department > b.department,
  },
  {
    title: "Join Date",
    dataIndex: "joinDate",
    sorter: (a, b) => a.joinDate - b.joinDate,
    key: "id",
  },
  // {
  //   title: "Tags",
  //   key: "tags",
  //   dataIndex: "tags",
  //   render: (_, { tags }) => (
  //     <>
  //       {tags.map((tag) => {
  //         let color = tag.length > 5 ? "geekblue" : "green";
  //         if (tag === "loser") {
  //           color = "volcano";
  //         }
  //         return (
  //           <Tag color={color} key={tag}>
  //             {tag.toUpperCase()}
  //           </Tag>
  //         );
  //       })}
  //     </>
  //   ),
  // },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

const UserTable = () => {
  const [data, setData] = useState(rows);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  return (
    <div className="my-3">
      <Table
        columns={columns}
        dataSource={data}
        pagination={{
          page: page,
          pageSize: pageSize,
          onChange: (page, pageSize) => {
            setPage(page), setPageSize(pageSize);
          },
          total: 500
        }}
      />
    </div>
  );
};

export default UserTable;
