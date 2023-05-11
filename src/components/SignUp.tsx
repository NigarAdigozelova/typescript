import { Button, Form, Input, message } from "antd";
import api from "../utils/api";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const showError = (errorMessage: string) => {
  message.error(errorMessage);
};

const SignUp = () => {
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not a valid email!",
      number: "${label} is not a valid number!",
    },
    number: {
      range: "${label} must be between ${min} and ${max}",
    },
  };
  const navigate = useNavigate();

  const onFinish = async (values: any) => {
    try {
      await api.post("/payment/register", values);
      navigate("/login");
    } catch (error) {
      console.log({ error });
      showError((error as any).response.data.errorMessage)
    }
  };
  return (
    <div style={{display:"flex",flexDirection:"column",alignItems:"center",margin:"40px 0"}}>
      <div style={{margin:"20px 0",fontWeight:"900",color:"red",fontSize:"30px"}}>Register</div>
      <Form
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        style={{ maxWidth: 600 }}
        validateMessages={validateMessages}
      >
        <Form.Item
          name={["user", "name"]}
          label="UserName"
          rules={[{ required: true }]}
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
              min: 6,
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name={["user", "email"]}
          label="Email"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item name={["user", "fullname"]} label="Full Name">
          <Input.TextArea />
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      <div><Link to="/login" style={{textDecoration:"none"}}>If you have a account, login</Link></div>
    </div>
  );
};

export default SignUp;
