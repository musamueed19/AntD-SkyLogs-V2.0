"use client";
import React from "react";
import { Button, Form, Input, message } from "antd";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const [form] = Form.useForm();

  const router = useRouter();


  function submitHandler(values) {
    console.log("Form Values:", values);
    message.success("Login Successful", 4000);
    router.push('/dashboard/users')
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
        <Input placeholder="Enter your username" required />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please enter your password!" }]}
      >
        <Input.Password placeholder="Enter your password" required />
      </Form.Item>

      <Form.Item className="flex items-center w-full justify-end">
        <Button block type="primary" htmlType="submit">
          Login
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
