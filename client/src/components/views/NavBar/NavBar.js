import React, { useState } from "react";
import LeftMenu from "./Sections/LeftMenu";
import RightMenu from "./Sections/RightMenu";
import { Drawer, Button, Icon } from "antd";
import "./Sections/Navbar.css";
import { Link } from "react-router-dom";

function NavBar() {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <nav
        className="menu"
        style={{
          position: "fixed",
          zIndex: 5,
          width: "100%",
          backgroundColor: "#003956",
        }}
      >
        <div className="menu__logo">
          <a href="/"><img src='https://www.sungkyul.ac.kr/sites/skukr/images/common/top-logo.png' alt='logo'/></a>
        </div>
        <div className="menu__container">
          {/* <div className="menu_left">
          <LeftMenu mode="horizontal" />
        </div> */}
          <div className="menu_rigth">
            <RightMenu mode="horizontal" />
          </div>
          <Button
            className="menu__mobile-button"
            type="primary"
            onClick={showDrawer}
          >
            <Icon type="align-right" />
          </Button>
          <Drawer
            title="Basic Drawer"
            placement="right"
            className="menu_drawer"
            closable={false}
            onClose={onClose}
            visible={visible}
          >
            {/* <LeftMenu mode="inline" /> */}
            {/* <RightMenu mode="inline" /> */}
          </Drawer>
        </div>
      </nav>
      <nav
        className="menu"
        style={{
          position: "fixed",
          zIndex: 5,
          width: "130px",
          height: "100%",
          backgroundColor: "#003956",
        }}
      >
        
        <ul
          style={{
            listStyle: "none",
            margin: "0 auto",
            padding: "0",
            color: "#fff",
            textAlign: "center",
          }}
        >
          <li style={{ marginBottom: "1rem",height:'88px',width:'130px',backgroundColor:'#272b31' }}></li>
          <li style={{ marginBottom: "3rem" }}>
            <Link to="/" style={{ color: "#fff" }}>
              <Icon
                type="notification"
                style={{ fontSize: "30px", marginBottom: "1rem" }}
              />
              <p>공지사항</p>
            </Link>
          </li>
          <li style={{ marginBottom: "3rem" }}>
            <Link to="/" style={{ color: "#fff" }}>
              <Icon
                type="gift"
                style={{ fontSize: "30px", marginBottom: "1rem" }}
              />
              <p>장바구니 정보</p>
            </Link>
          </li>
          <li style={{ marginBottom: "3rem" }}>
            <Link to="/" style={{ color: "#fff" }}>
              <Icon
                type="schedule"
                style={{ fontSize: "30px", marginBottom: "1rem" }}
              />
              <p>수강신청 내역</p>
            </Link>
          </li>
          <li style={{ marginBottom: "3rem" }}>
            <Link to="/" style={{ color: "#fff" }}>
              <Icon
                type="calendar"
                style={{ fontSize: "30px", marginBottom: "1rem" }}
              />
              <p>종합시간표&nbsp; 조회</p>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
