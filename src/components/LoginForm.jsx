"use client"
import React, { useState } from "react";
import { Button, Form, Input, Radio } from "antd";
const LoginForm = () => {
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState("vertical");
  return (
      <Form
          className="w-full"
      layout={formLayout}
      form={form}
      initialValues={{ layout: formLayout }}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: "Please enter your username!" }]}
      >
        <Input type="text" placeholder="Enter your username" />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please enter your password!" }]}
      >
        <Input type="password" placeholder="Enter your password" />
      </Form.Item>
          <Form.Item
              className="flex items-center w-full justify-end"
          >
        <Button type="primary">Login</Button>
      </Form.Item>
    </Form>
  );
};
export default LoginForm;
