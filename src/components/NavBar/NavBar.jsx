import React from "react";

import "./NavBar.css";
import { Link } from "react-router-dom";
import {
  ShoppingCartOutlined,
  SearchOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar } from "antd";

const NavBar = () => {
  const navStyle = {
    color: "rgb(223, 215, 215)",
  };

  return (
    <nav className="navBar">
      <div className="logo">Product Hunt Project </div>
      <ul className="navList">
        <Link to="/" style={navStyle}>
          <li>HomePage</li>
        </Link>
        <Link to="/products" style={navStyle}>
          <li>Products</li>
        </Link>
        <Link to="/about" style={navStyle}>
          <li>About Us</li>
        </Link>
        <Link to="/contact" style={navStyle}>
          <li>Contact</li>
        </Link>
      </ul>
      <div className="search" style={{ marginRight: "15px" }}>
        <SearchOutlined style={{ marginRight: "7px" }} />
        <ShoppingCartOutlined /> Cart
      </div>
      <div className="profile">
        <div
          style={{
            color: "rgb(223, 215, 215)",
            marginTop: "5px",
            marginRight: "5px",
          }}
        >
          Profile
        </div>
        <Avatar
          icon={<UserOutlined style={{ color: "rgba(39, 43, 48, 0.979)" }} />}
        />
      </div>
    </nav>
  );
};

export default NavBar;
