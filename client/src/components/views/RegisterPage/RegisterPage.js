import React from "react";
import moment from "moment";
import { Formik } from "formik";
import * as Yup from "yup";
import { registerUser } from "../../../_actions/user_actions";
import { useDispatch } from "react-redux";
/** @jsxFrag React.Fragment */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { Form } from "antd";
import { Link } from "react-router-dom";

const container = css`
  text-align: center;
  width: 350px;
  height: 100vh;
  margin: 5rem auto;
`;

const line = css`
  margin: 20px 0;
  border-bottom: 3px solid #003956;
`;

const form = css`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const input = css`
  width: 100%;
  height: 2.5rem;
  margin-bottom: 0.25rem;
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
  margin: 1rem 0;
`;

const link = css`
  text-decoration: none;
  color: black;
  &:hover {
    color: #fff;
  }
`;

function RegisterPage(props) {
  const dispatch = useDispatch();
  return (
    <Formik
      initialValues={{
        email: "",
        lastName: "",
        name: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={Yup.object().shape({
        name: Yup.string().required("이름을 입력하세요"),
        lastName: Yup.string().required("성을 입력하세요"),
        email: Yup.string()
          .email("올바른 이메일이 아닙니다")
          .required("이메일을 입력하세요"),
        password: Yup.string()
          .min(6, "6자 이상의 비밀번호를 입력하세요")
          .required("비밀번호를 입력하세요"),
        confirmPassword: Yup.string()
          .oneOf([Yup.ref("password"), null], "비밀번호가 다릅니다")
          .required("비밀번호를 다시한번 확인해주세요"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          let dataToSubmit = {
            email: values.email,
            password: values.password,
            name: values.name,
            lastname: values.lastname,
            image: `http://gravatar.com/avatar/${moment().unix()}?d=identicon`,
          };

          dispatch(registerUser(dataToSubmit)).then((response) => {
            if (response.payload.success) {
              props.history.push("/login");
            } else {
              alert(response.payload.err.errmsg);
            }
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
            <h1>간편회원가입</h1>
            <div css={line} />
            <form css={form} onSubmit={handleSubmit}>
              <Form.Item required label="Name">
                <input
                  css={input}
                  id="name"
                  placeholder="Enter your name"
                  type="text"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.name && touched.name
                      ? "text-input error"
                      : "text-input"
                  }
                />
                {errors.name && touched.name && (
                  <div className="input-feedback">{errors.name}</div>
                )}
              </Form.Item>

              <Form.Item required label="Last Name">
                <input
                  css={input}
                  id="lastName"
                  placeholder="Enter your Last Name"
                  type="text"
                  value={values.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.lastName && touched.lastName
                      ? "text-input error"
                      : "text-input"
                  }
                />
                {errors.lastName && touched.lastName && (
                  <div className="input-feedback">{errors.lastName}</div>
                )}
              </Form.Item>

              <Form.Item
                required
                label="Email"
                hasFeedback
                validateStatus={
                  errors.email && touched.email ? "error" : "success"
                }
              >
                <input
                  css={input}
                  id="email"
                  placeholder="Enter your Email"
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.email && touched.email
                      ? "text-input error"
                      : "text-input"
                  }
                />
                {errors.email && touched.email && (
                  <div className="input-feedback">{errors.email}</div>
                )}
              </Form.Item>

              <Form.Item
                required
                label="Password"
                hasFeedback
                validateStatus={
                  errors.password && touched.password ? "error" : "success"
                }
              >
                <input
                  css={input}
                  id="password"
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
                />
                {errors.password && touched.password && (
                  <div className="input-feedback">{errors.password}</div>
                )}
              </Form.Item>

              <Form.Item required label="Confirm" hasFeedback>
                <input
                  css={input}
                  id="confirmPassword"
                  placeholder="Enter your confirmPassword"
                  type="password"
                  value={values.confirmPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.confirmPassword && touched.confirmPassword
                      ? "text-input error"
                      : "text-input"
                  }
                />
                {errors.confirmPassword && touched.confirmPassword && (
                  <div className="input-feedback">{errors.confirmPassword}</div>
                )}
              </Form.Item>

              <Form.Item>
                <button
                  css={submitButton}
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                >
                  회원가입
                </button>
              </Form.Item>
            </form>
            <button css={registerButton}>
              <Link to="/" css={link}>
                로그인하러 가기
              </Link>
            </button>
          </div>
        );
      }}
    </Formik>
  );
}

export default RegisterPage;
