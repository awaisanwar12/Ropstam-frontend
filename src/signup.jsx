import React from "react";
import { message } from "antd";
import { useNavigate } from "react-router";
import { Button, Form, Input } from "antd";

function Signup() {
  const navigate = useNavigate();

  const handleSubmit = (data) => {
    fetch("http://localhost:5000/signup", {
      method: "Post",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(data)
    })
      .then((res) => res.json())
      .then((data) => { console.log(data)
      
      message.success("Succesfull")})
  
      .catch((err) =>{ console.error(err);
        
        message.error("failed to signin up")
      })
        
    }
  

  return (
    <Form name="register" onFinish={handleSubmit} style={{ maxWidth: 600 }}>
      <Form.Item
        label="First Name"
        name="firstname"
        rules={[
          {
            required: true,
            message: "Please input your First Name!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Last Name"
        name="lastname"
        rules={[
          {
            required: true,
            message: "Please input your Last Name!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: "email",
            message: "The input is not valid E-mail!",
          },
          {
            required: true,
            message: "Please input your E-mail!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={["password"]}
        hasFeedback
        rules={[
          {
            required: true,
            message: "Please confirm your password!",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject(
                new Error("The two passwords that you entered do not match!")
              );
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
        <Button onClick={() => navigate("/signin")}>Sign In</Button>
      </Form.Item>
    </Form>
  );
}
export default Signup;
