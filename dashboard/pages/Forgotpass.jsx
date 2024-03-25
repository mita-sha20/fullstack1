import React, { useState } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import axios from 'axios';

const Forgotpass = () => {
  let [loading,setLoading] = useState(false);
  const onFinish = async (values) => {
    console.log('Success:', values);

    setLoading(true);

    let data = await axios.post("http://localhost:8000/api/v1/auth/forgotpass",{
      email: values.email,
    }
    )

  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
   
  return (
   <>
     <Form
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Email"
      name="email"
      rules={[
        {
          required: true,
          message: 'Please input your email!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    {/* <Form.Item
      label="Password"
      name="password"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <Input.Password />
    </Form.Item> */}

    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit" loading={loading} disabled={loading}>
        Submit
      </Button>
    </Form.Item>
  </Form>
   </>
  )
}

export default Forgotpass;
