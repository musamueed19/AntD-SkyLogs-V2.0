"use client";
import React from "react";
import { Button, Form, Input, message } from "antd";

const LoginForm = () => {
  const [form] = Form.useForm();

  function submitHandler(values) {
    console.log("Form Values:", values);
    message.success("Login Successful");
  }

  return (
    <Form
      className="w-full"
      layout="vertical"
      form={form}
      onFinish={submitHandler}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: "Please enter your username!" }]}
      >
        <Input placeholder="Enter your username" />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please enter your password!" }]}
      >
        <Input.Password placeholder="Enter your password" />
      </Form.Item>

      <Form.Item className="flex items-center w-full justify-end">
        <Button type="primary" htmlType="submit">
          Login
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
