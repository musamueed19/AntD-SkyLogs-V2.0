import React from "react";
import { Button, DatePicker, Form, Input, Select } from "antd";

const { Option } = Select;

const EditUser = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Form Values:", values);
  };

  return (
    <div>
      <h1 className="my-6 text-2xl font-medium text-center">Edit User</h1>
      <Form
        layout="vertical"
        form={form}
        onFinish={onFinish}
        initialValues={{
          status: "Active",
          department: "IT",
          jobType: "Full-Time",
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {/* Name */}
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please enter your name" }]}
          >
            <Input placeholder="Enter your name" />
          </Form.Item>

          {/* Email */}
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Please enter your email" },
              { type: "email", message: "Please enter a valid email" },
            ]}
          >
            <Input placeholder="Enter your email" />
          </Form.Item>

          {/* Phone */}
          <Form.Item
            label="Phone #"
            name="phone"
            rules={[
              { required: true, message: "Please enter your phone number" },
            ]}
          >
            <Input placeholder="Enter your phone number" />
          </Form.Item>

          {/* Status */}
          <Form.Item
            label="Status"
            name="status"
            rules={[{ required: true, message: "Please select a status" }]}
          >
            <Select placeholder="Select status">
              <Option value="Active">Active</Option>
              <Option value="Inactive">Inactive</Option>
            </Select>
          </Form.Item>

          {/* Department */}
          <Form.Item
            label="Department"
            name="department"
            rules={[{ required: true, message: "Please select a department" }]}
          >
            <Select placeholder="Select department">
              <Option value="IT">IT</Option>
              <Option value="HR">HR</Option>
              <Option value="Finance">Finance</Option>
              <Option value="Marketing">Marketing</Option>
            </Select>
          </Form.Item>

          {/* Job Type */}
          <Form.Item
            label="Job Type"
            name="jobType"
            rules={[{ required: true, message: "Please select a job type" }]}
          >
            <Select placeholder="Select job type">
              <Option value="Full-Time">Full-Time</Option>
              <Option value="Part-Time">Part-Time</Option>
              <Option value="Intern">Intern</Option>
              <Option value="Contract">Contract</Option>
            </Select>
          </Form.Item>

          {/* Join Date */}
          <Form.Item
            label="Join Date"
            name="joinDate"
            rules={[{ required: true, message: "Please select a join date" }]}
          >
            <DatePicker className="w-full" />
          </Form.Item>
        </div>

        {/* Submit Button */}
        <Form.Item>
          <Button type="primary" htmlType="submit" className="w-full">
            Update
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default EditUser;
