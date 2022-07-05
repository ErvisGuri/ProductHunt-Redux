import React from "react";

import "./NavBar.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { ShoppingOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";

const NavBar = () => {
  const { cartTotalQuantity } = useSelector((state) => state.cart);

  const navigate = useNavigate();

  const navigateToCart = () => {
    navigate("/cart");
  };

  const navigateToProfile = () => {
    navigate("/profile");
  };

  const navigateToHomePage = () => {
    navigate("/");
  };

  const navStyle = {
    color: "rgb(223, 215, 215)",
  };

  return (
    <nav className="navBar">
      <div className="logo" onClick={navigateToHomePage}>
        Product Hunt Project
      </div>
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
      <div className="navCart" onClick={() => navigateToCart()}>
        <ShoppingOutlined
          style={{ fontSize: "18px", marginRight: "3px", marginTop: "6px" }}
        />
        <Avatar
          style={{ color: "rgba(39, 43, 48, 0.979)", marginBottom: "px" }}
        >
          <div className="cartNumber">{cartTotalQuantity}</div>
        </Avatar>
      </div>

      <div className="profile" onClick={navigateToProfile}>
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
