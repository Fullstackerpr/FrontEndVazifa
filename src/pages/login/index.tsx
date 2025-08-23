import { Button, Form, Input, type FormProps } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import type { RootState } from "../../lib";
import { useMutation } from "@tanstack/react-query";
import { api } from "../../api";
import { clearSignInData } from "../../lib/features/signInSlice";
import { setToken } from "../../lib/features/authSlice";

type FieldType = {
  email: string;
  password?: string;
};

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const initialValues = useSelector((state: RootState) => state.signInSlice);

  const signIn = useMutation({
    mutationFn: (data: any) => api.post("/auth/login", data),
  });

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    signIn.mutate(values, {
      onSuccess: (res) => {
        dispatch(clearSignInData());
        dispatch(setToken(res?.data?.access_token));
        navigate("/profile");
      },
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <Form
          name="basic"
          initialValues={initialValues}
          onFinish={onFinish}
          autoComplete="off"
          layout="vertical"
        >
          <Form.Item<FieldType>
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input size="large" placeholder="Enter your email" />
          </Form.Item>

          <Form.Item<FieldType>
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password size="large" placeholder="Enter your password" />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              block
              className="rounded-lg"
            >
              Login
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default React.memo(Login);
