import React from "react";
import { Form, Radio } from "antd";

function LoginForm() {
  return (
    <Form layout="vertical" style={{ padding: "10px" }}>
      <Form.Item label="Radio">
        <Radio.Group>
          <Radio value="apple"> Apple </Radio>
          <Radio value="pear"> Pear </Radio>
        </Radio.Group>
      </Form.Item>
    </Form>
  );
}

export default LoginForm;
