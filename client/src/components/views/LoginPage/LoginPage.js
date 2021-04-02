import React, { useState } from "react";
/** @jsxFrag React.Fragment */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { Link, withRouter } from "react-router-dom";
import { loginUser } from "../../../_actions/user_actions";
import { Formik } from "formik";
import * as Yup from "yup";
import { Form, Icon, Checkbox } from "antd";
import { useDispatch } from "react-redux";
import InfoPage from "./InfoPage";
import NoticePage from "./NoticePage";

const main = css`
  width: 70%;
  margin: 0 auto;
`;

const background = css`
  background-image: url("https://www.sungkyul.ac.kr/sites/skukr/atchmnfl_mngr/imageSlide/25/temp_1614322445771100.jpg");
  background-repeat: no-repeat;
  background-size: cover;

  position: relative;
  height: 600px;
`;

const container = css`
  position: absolute;
  left: 300px;
  top: 3rem;
  text-align: center;
  width: 350px;
  padding: 3rem;
  background-color: #fff;
  border-radius: 10px;
`;

const line = css`
  margin: 20px 0;
  border-bottom: 3px solid #113769;
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
  background-color: #003956;
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
  margin: 0.5rem 0;
`;

const link = css`
  text-decoration: none;
  color: black;
  &:hover {
    color: #fff;
  }
`;

const title = css`
  margin: 20px 0 30px 0;
  padding: 8px 0 18px 0;
  border-top: 4px solid #fff;
  border-bottom: 4px solid #fff;
  font-size: 60px;
  line-height: 1;
  text-align: center;
  color: #fff;
  letter-spacing: 2px;
  position: absolute;
  right: 300px;
  top: 100px;
`;

const subTitle = css`
  display: block;
  margin-bottom: 25px;
  font-family: "Noto Thin";
  font-size: 36px;
  color: #2a2a2a;
  line-height: 1.2;
  position: absolute;
  right: 400px;
  top: 250px;
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
                  props.history.push("/main");
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
            <div css={background}>
              <strong css={title}>SKUniverCity</strong>
              <strong css={subTitle}>
                교육혁신도시
                <br /> 미래교육혁신도시
                <br /> SKU{" "}
              </strong>
              <div css={container}>
                <strong
                  style={{
                    fontFamily: "Noto Thin",
                    fontSize: "1.5rem",
                    color: "#2a2a2a",
                    lineHeight: "1.2",
                  }}
                >
                  학부 수강신청
                </strong>
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
                        <Icon
                          type="lock"
                          style={{ color: "rgba(0,0,0,.25)" }}
                        />
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
                        이메일 기억하기
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
            </div>
          );
        }}
      </Formik>
      <div css={main}>
        <InfoPage />
        <NoticePage />
      </div>
    </>
  );
}

export default withRouter(LoginPage);
