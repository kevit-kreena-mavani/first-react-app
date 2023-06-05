import React from "react";
import {
  Button,
  DatePicker,
  Divider,
  Form,
  Input,
  InputNumber,
  Select,
  notification,
} from "antd";
import { Option } from "antd/es/mentions";
import Dragger from "antd/es/upload/Dragger";

const prefixSelector = (
  <Form.Item name="prefix" noStyle>
    <Select style={{ width: 70 }}>
      <Option value="91">+91</Option>
      <Option value="1">+1</Option>
    </Select>
  </Form.Item>
);

function LoginForm() {
  return (
    <Form layout="vertical">
      <div className="form-layout">
        <Form.Item
          name="firstName"
          label="First Name"
          rules={[{ required: true, message: "Please enter first name!" }]}
        >
          <Input placeholder="Enter Your First Name" />
        </Form.Item>
        <Form.Item
          name="lastName"
          label="Last Name"
          rules={[{ required: true, message: "Please enter last name!" }]}
        >
          <Input placeholder="Enter Your Last Name" />
        </Form.Item>
        <Form.Item
          name="birthDate"
          label="Birth Date"
          rules={[{ required: true, message: "Please enter Birth Date!" }]}
        >
          <DatePicker />
        </Form.Item>
        <Form.Item
          name="email"
          label="E-mail"
          rules={[
            {
              type: "email",
              message: "Enter valid E-mail!",
            },
            {
              required: true,
              message: "Please enter E-mail!",
            },
          ]}
        >
          <Input placeholder="Enter Your Email" />
        </Form.Item>
        <Form.Item
          name="phone"
          label="Phone Number"
          rules={[{ required: true, message: "Please enter phone number!" }]}
        >
          <Input addonBefore={prefixSelector} style={{ width: "100%" }} />
        </Form.Item>
        <Form.Item
          name="gender"
          label="Gender"
          rules={[{ required: true, message: "Please select gender!" }]}
        >
          <Select placeholder="Select your gender">
            <Option value="male">Male</Option>
            <Option value="female">Female</Option>
            <Option value="other">Other</Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              required: true,
              message: "Please enter password!",
            },
          ]}
          hasFeedback
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
      </div>

      <Divider orientation="left" plain>
        Education Details
      </Divider>

      <div className="form-layout">
        <Form.Item
          label="Collage Name"
          name="college"
          rules={[{ required: true, message: "Please enter college name!" }]}
        >
          <Input placeholder="Enter Collage Name" />
        </Form.Item>

        <Form.Item
          name="department"
          label="Department"
          rules={[{ required: true, message: "Please select department!" }]}
        >
          <Select placeholder="Select your department">
            <Option value="male">Information Technology</Option>
            <Option value="female">Computer Engineering</Option>
            <Option value="other">Electrical Engineering</Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="cgpa"
          label="CGPA/CPI"
          rules={[{ required: true, message: "Please enter CGPA/CPI!" }]}
        >
          <InputNumber placeholder="Enter Marks" />
        </Form.Item>

        <Form.Item
          name="description"
          label="Project description"
          rules={[
            {
              required: true,
              message: "Please enter description of any project!",
            },
          ]}
        >
          <Input.TextArea placeholder="Enter Project Introduction" rows={4} />
        </Form.Item>

        <Form.Item style={{ gridColumn: " 2 / 4" }} label="Upload Mark-sheet">
          <Dragger
            name="file"
            multiple
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            onChange={(info) => {
              const { status } = info.file;
              if (status !== "uploading") {
                console.log(info.file, info.fileList);
              }
              if (status === "done") {
                notification.success({
                  message: `${info.file.name} file uploaded successfully.`,
                  placement: "bottomLeft",
                });
              } else if (status === "error") {
                notification.error({
                  message: `${info.file.name} file upload failed.`,
                  placement: "bottomLeft",
                });
              }
            }}
            onDrop={(e) => {
              console.log("Dropped files", e.dataTransfer.files);
            }}
          >
            <p className="ant-upload-text">Upload your Mark-sheet</p>
            <p className="ant-upload-hint">
              you can directly upload by clicking or drag file
            </p>
          </Dragger>
        </Form.Item>
      </div>

      <div style={{ display: "flex", justifyContent: "flex-end", padding: 20 }}>
        <Button type="primary" htmlType="submit" size="large">
          Submit
        </Button>
      </div>
    </Form>
  );
}

export default LoginForm;
