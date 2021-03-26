import React, { useState } from "react";
/** @jsxFrag React.Fragment */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { Link, withRouter } from "react-router-dom";
import { loginUser } from "../../../_actions/user_actions";
import { Formik } from "formik";
import * as Yup from "yup";
import { Form, Icon, Checkbox} from "antd";
import { useDispatch } from "react-redux";

const container = css`
  text-align: center;
  width: 350px;
  height: 100vh;
  margin: 5rem auto;
`;

const line = css`
  margin: 20px 0;
  border-bottom: 3px solid;
`;

const form = css`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const input = css`
  width: 100%;
  height: 2.5rem;
  margin-bottom: 0.75rem;
  padding: 0;
  box-sizing: border-box;
  border: 1px solid #e8e8e8;
  border-radius: 5px;
`;

const submitButton = css`
  width: 100%;
  height: 3rem;
  background-color: black;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const registerButton = css`
  width: 100%;
  background-color: #e8e8e8;
  border: #e8e8e8;
  border-radius: 30px;
  height: 3.5rem;
  margin: 1rem 0;
`;

const link = css`
  text-decoration: none;
  color: black;
  &:hover {
    color: #fff;
  }
`;


function LoginPage(props) {
  const dispatch = useDispatch();
  const rememberMeChecked = localStorage.getItem("rememberMe") ? true : false;

  const [formErrorMessage, setFormErrorMessage] = useState("");
  const [rememberMe, setRememberMe] = useState(rememberMeChecked);

  const handleRememberMe = () => {
    setRememberMe(!rememberMe);
  };

  const initialEmail = localStorage.getItem("rememberMe")
    ? localStorage.getItem("rememberMe")
    : "";

  return (
    <>
      <Formik
        initialValues={{
          email: initialEmail,
          password: "",
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email("올바른 이메일이 아닙니다")
            .required("이메일을 입력하세요"),
          password: Yup.string()
            .min(6, "6자 이상의 비밀번호를 입력하세요")
            .required("비밀번호를 입력하세요"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            let dataToSubmit = {
              email: values.email,
              password: values.password,
            };

            dispatch(loginUser(dataToSubmit))
              .then((response) => {
                if (response.payload.loginSuccess) {
                  window.localStorage.setItem(
                    "userId",
                    response.payload.userId
                  );
                  if (rememberMe === true) {
                    window.localStorage.setItem("rememberMe", values.email);
                  } else {
                    localStorage.removeItem("rememberMe");
                  }
                  props.history.push("/");
                } else {
                  setFormErrorMessage("계정과 비밀번호를 다시 확인해주세요");
                }
              })
              .catch((err) => {
                setFormErrorMessage("계정과 비밀번호를 다시 확인해주세요");
                setTimeout(() => {
                  setFormErrorMessage("");
                }, 3000);
              });
            setSubmitting(false);
          }, 500);
        }}
      >
        {(props) => {
          const {
            values,
            touched,
            errors,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit,
          } = props;
          return (
            <div css={container}>
              <h1>간편 로그인</h1>
              <div css={line} />

              <form onSubmit={handleSubmit} css={form}>
                <Form.Item required>
                  <input
                    id="email"
                    placeholder="Enter your email"
                    type="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.email && touched.email
                        ? "text-input error"
                        : "text-input"
                    }
                    css={input}
                  />
                  {errors.email && touched.email && (
                    <div className="input-feedback">{errors.email}</div>
                  )}
                </Form.Item>

                <Form.Item required>
                  <input
                    id="password"
                    prefix={
                      <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    placeholder="Enter your password"
                    type="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.password && touched.password
                        ? "text-input error"
                        : "text-input"
                    }
                    css={input}
                  />
                  {errors.password && touched.password && (
                    <div className="input-feedback">{errors.password}</div>
                  )}
                </Form.Item>

                {formErrorMessage && (
                  <label>
                    <p
                      style={{
                        color: "#ff0000bf",
                        fontSize: "0.7rem",
                        border: "1px solid",
                        padding: "1rem",
                        borderRadius: "10px",
                      }}
                    >
                      {formErrorMessage}
                    </p>
                  </label>
                )}

                <Form.Item>
                  <div>
                    <button
                      css={submitButton}
                      type="submit"
                      style={{ minWidth: "100%" }}
                      disabled={isSubmitting}
                      onSubmit={handleSubmit}
                    >
                      로그인
                    </button>
                    <Checkbox
                      id="rememberMe"
                      onChange={handleRememberMe}
                      checked={rememberMe}
                    >
                      Remember me
                    </Checkbox>
                  </div>
                </Form.Item>
              </form>
              <button css={registerButton}>
                <Link to="/register" css={link}>
                  계정이 없으신가요? 간편가입하기
                </Link>
              </button>
            </div>
          );
        }}
      </Formik>
    </>
  );
}

export default withRouter(LoginPage);
