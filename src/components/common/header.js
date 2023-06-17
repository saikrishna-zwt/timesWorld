import React, { useState } from "react";
import { Layout } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";


const { Header } = Layout;
const Topbar = ({ filterData }) => {
  const history = useNavigate();
  const [activeTab, setActiveTab] = useState("All");
  const [activeToggle, setactiveToggle] = useState(false);

  const onClickFilterCountry = (e, args) => {
    e.preventDefault();
    filterData(args);
    setActiveTab(args);
  };

  const toggle = () => {
    setactiveToggle(!activeToggle);
  };

  const onClickLogout = () => {
      history('/')
  }

  return (
    <Layout>
      <Header
        style={{
          position: "fixed",
          display: "flex",
          justifyContent: "space-between",
          zIndex: 1,
          width: "100%",
          paddingTop: "0px",
          paddingBottom: "0px",
          height: "44px !important",
          boxShadow: "0 0 10px 0 rgb(183 192 206 / 20%)",
          backgroundColor: "#FBFBFB",
        }}
        className="site-layout-background bg-2c2c2c"
      >
        <div
          style={{ display: "flex", alignItems: "center" }}
          className="topbar-left-side"
        >
          <span
            style={{ color: "black"}}
            className="sidebar-menu-icon"
          >
            Countries
          </span>
        </div>
        <div className="mobile" onClick={toggle}>
          <MenuOutlined />
        </div>
        <div
          className={
            activeToggle
              ? "topbar-right-side mobile-nav mobile-nav-active "
              : "topbar-right-side mobile-nav"
          }
        >
          <div
            className={activeTab === "All" ? "activeNavLink" : "navLink"}
            onClick={(e) => onClickFilterCountry(e, "All")}
          >
            All
          </div>
          <div
            className={activeTab === "Asia" ? "activeNavLink" : "navLink"}
            onClick={(e) => onClickFilterCountry(e, "Asia")}
          >
            Asia
          </div>
          <div
            className={activeTab === "Europe" ? "activeNavLink" : "navLink"}
            onClick={(e) => onClickFilterCountry(e, "Europe")}
          >
            Europe
          </div>

          <div
            className="navLink"
            onClick={() => onClickLogout()}
          >
            Logout
          </div>

          <span className="language-option-header"></span>
        </div>
      </Header>
    </Layout>
  );
};

export default Topbar;
