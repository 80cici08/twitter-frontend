import {
  Button, Form, Input, Dialog,
} from 'antd-mobile';
import './index.css';

const initialValues = {
  username: 'test',
  password: '12345678',
};

function Login() {
  const [form] = Form.useForm();

  const onSubmit = () => {
    const values = form.getFieldsValue();
    Dialog.alert({
      content: JSON.stringify(values),
    });
  };

  return (
    <div className="login">
      <Form
        form={form}
        layout="horizontal"
        mode="card"
        initialValues={initialValues}
        footer={(
          <Button block color="primary" onClick={onSubmit} size="large">
            Login
          </Button>
        )}
      >
        <Form.Item label="username" name="username">
          <Input placeholder="please enter username" />
        </Form.Item>
        <Form.Item label="password" name="password">
          <Input placeholder="please enter password" clearable type="password" />
        </Form.Item>
      </Form>
    </div>
  );
}

export default Login;
