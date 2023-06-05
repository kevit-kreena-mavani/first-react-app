import { Button, Checkbox, Form, Input, Modal, notification } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";

function LoginModal(props: { open: boolean; setOpen: any }) {
  const { open, setOpen } = props;

  const onFinish = (values: any) => {
    notification.success({
      message: "Login Successful",
      placement: "bottomLeft",
    });

    console.log("Login with :", values);

    if (values) {
      setOpen(false);
    }
  };

  return (
    <Modal title="Login" open={open} closable={false} footer={[]}>
      <Form onFinish={onFinish}>
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Please input your Username!" }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your Password!" }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <a className="login-form-forgot" href="/">
              Forgot password
            </a>
          </div>
        </Form.Item>

        <div className="login-actions">
          <Form.Item>
            <Button onClick={() => setOpen(false)}>Cancel</Button>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Login
            </Button>
          </Form.Item>
        </div>
      </Form>
    </Modal>
  );
}

export default LoginModal;
