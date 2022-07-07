import React, { useState, useEffect } from "react";

import "./NavBar.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateCurrency } from "../../features/productsSlice";
import { Axios } from "axios";

//Antd
import { ShoppingOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";

//Material UI
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

const BASE_URL = "https://api.exchangeratesapi.io/v1/latest";

const NavBar = () => {
  const { cartTotalQuantity } = useSelector((state) => state.cart);
  const [anchorEl, setAnchorEl] = useState(null);
  const [currency, setCurrency] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const updateCurrencyf = () => {
    dispatch(
      updateCurrency({
        currency: currency,
      })
    );
    handleClose();
  };

  // useEffect(() => {
  //   Axios.get(BASE_URL, {
  //     headers: {
  //       Authorization: `token `,
  //     },
  //   }).then(
  //     (res) => {
  //       const response = res.data;
  //     },
  //     (error) => {
  //       const status = error.response.status;
  //     }
  //   );
  // }, []);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleChangeCurrency = () => {};

  const handleClose = () => {
    setAnchorEl(null);
  };

  const navigateToCart = () => {
    navigate("/cart");
  };

  const handleSignInOut = () => {
    navigate("/");
    handleClose();
  };

  const navigateToProfile = () => {
    navigate("/Profile");
    handleClose();
  };

  const navigateToHomePage = () => {
    navigate("/homepage");
  };

  const navStyle = {
    color: "rgb(223, 215, 215)",
  };

  return (
    <nav className="navBar">
      <div className="logo" onClick={navigateToHomePage}>
        Product Hunt Web
      </div>
      <ul className="navList">
        <Link to="/homepage" style={navStyle}>
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
          style={{ fontSize: "18px", marginRight: "3px", marginTop: "5px" }}
        />
        <Avatar style={{ color: "rgba(39, 43, 48, 0.979)" }}>
          <div className="cartNumber">{cartTotalQuantity}</div>
        </Avatar>
      </div>
      <div className="profile">
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <Avatar
            icon={<UserOutlined style={{ color: "rgba(39, 43, 48, 0.979)" }} />}
          />
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={navigateToProfile}>
            <span>Profile</span>
          </MenuItem>
          <MenuItem>
            <span onClick={handleSignInOut}>Choose Currency</span>
            <Select
              value={currency}
              onChange={handleChangeCurrency}
              autoWidth
              label="currency"
              style={{ padding: 0, borderRadius: 2 }}
            >
              <MenuItem onClick={updateCurrencyf}>$</MenuItem>
              <MenuItem>€</MenuItem>
              <MenuItem>ALL</MenuItem>
            </Select>
          </MenuItem>
        </Menu>
      </div>
    </nav>
  );
};

export default NavBar;
