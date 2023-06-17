import React from "react";
import { Row, Col, Form, Input, Button, Checkbox } from "antd";
import SocialMediaContainer from "../common/socialMediaContainer";
import { useNavigate } from "react-router-dom";
import keyImage from "../../signImage.png";

const LoginPage = () => {
  const history = useNavigate();

  const onFinish = (values) => {
    history("/countryList");
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const validateCheckbox = (_, value) => {
    if (!value) {
      return Promise.reject();
    }
    return Promise.resolve();
  };

  return (
    <>
      <section className="login-wrapper">
        <Row>
          <Col lg={14} className="login-details-section">
            <Row>
              <Col lg={4}></Col>
              <Col lg={16}>
                <div className="AuthWrapper">
                  <div className="auth-contents">
                    <Form
                      onFinish={onFinish}
                      onFinishFailed={onFinishFailed}
                      autoComplete="off"
                      layout="vertical"
                    >
                      <h2 className="sign-heading"> Sign In</h2>
                      <p className="new-user-title">
                        New User? {" "}
                        <span className="create-account-span">
                          Create an Account
                        </span>
                      </p>
                      <Form.Item
                        rules={[
                          {
                            message: "User Name or Email is Required",
                            required: true,
                          },
                        ]}
                        name="userNameOrEmail"
                      >
                        <Input
                          className="custom-input-style"
                          placeholder="Username or Email"
                          autoComplete="off"
                        />
                      </Form.Item>
                      <Form.Item
                        rules={[
                          { message: "Password is Required", required: true },
                        ]}
                        name="Password"
                      >
                        <Input.Password
                          className="custom-input-style"
                          placeholder="Password"
                          autoComplete="off"
                          autoSave="off"
                        />
                      </Form.Item>
                      <Form.Item
                        rules={[
                          {
                            validator: validateCheckbox,
                            message: "Please agreed the Legal Disclaimer.",
                          },
                        ]}
                        name="checkbox"
                        valuePropName="checked"
                      >
                        <Checkbox>Keep me signed in</Checkbox>
                      </Form.Item>
                      <Form.Item>
                        <Button
                          htmlType="submit"
                          className="custom-button-style"
                        >
                          Sign In
                        </Button>
                      </Form.Item>
                    </Form>

                    <div class="heading-container">
                      <hr class="heading-line" />
                      <h1 class="heading-text">Or Sign in With</h1>
                      <hr class="heading-line" />
                    </div>
                    <div className="mediaContainer">
                      <SocialMediaContainer />
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
          <Col className="image-container" lg={10}>
            <img
              width="100%"
              alt="login"
              src={keyImage}
              style={{ marginLeft: "40px" }}
            />
          </Col>
        </Row>
      </section>
    </>
  );
};

export default LoginPage;
