/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Menu } from "antd";
import axios from "axios";
import { USER_SERVER } from "../../../Config";
import { withRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import { Icon } from "antd";
function RightMenu(props) {
  const user = useSelector((state) => state.user);

  const logoutHandler = () => {
    axios.get(`${USER_SERVER}/logout`).then((response) => {
      if (response.status === 200) {
        props.history.push("/");
        localStorage.setItem("userId", "");
      } else {
        alert("Log Out Failed");
      }
    });
  };

  if (user.userData && !user.userData.isAuth) {
    return (
      <Menu mode={props.mode} style={{ backgroundColor: "#003956" }}>
        {/* <Menu.Item key="mail">
          <a href="/">로그인</a>
        </Menu.Item>
        <Menu.Item key="app">
          <a href="/register">회원가입</a>
        </Menu.Item> */}
        
      </Menu>
    );
  } else {
    return (
      <Menu mode={props.mode} style={{ backgroundColor: "#003956" }}>
        <Menu.Item key="logout">
          <Icon
            type="unlock"
            style={{ fontSize: "3rem",margin:'16px 2rem',color:'#fff' }}
            onClick={logoutHandler}
          />
        </Menu.Item>
      </Menu>
    );
  }
}

export default withRouter(RightMenu);
