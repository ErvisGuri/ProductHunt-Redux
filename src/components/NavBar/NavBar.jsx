import React, { useState, useEffect } from "react";

import "./NavBar.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectProduct, updateCurrency } from "../../features/productsSlice";
import { selectUser, Signout } from "../../features/userSlice";

//Antd
import { ShoppingOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";

//Material UI
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { toast } from "react-toastify";

const CURRENCY_RATES = "https://api.apilayer.com/exchangerates_data/latest?";

const NavBar = () => {
  const { cartTotalQuantity } = useSelector((state) => state.cart);
  const [anchorEl, setAnchorEl] = useState(null);
  const [currencyChange, setCurrencyChange] = useState("NONE");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const signout = async () => {
    dispatch(Signout(user));
    navigate("/");
    toast.info("Logged out successfully!", {
      position: "top-center",
    });
  };

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

  const updateCurrenyEur = () => {
    if (currencyChange === "NONE") {
      dispatch(updateCurrency("€"));
      setCurrencyChange("€");
    } else {
      dispatch(updateCurrency("NONE"));
      setCurrencyChange("NONE");
    }
  };

  const updateCurrenyALL = () => {
    if (currencyChange === "NONE") {
      dispatch(updateCurrency("ALL"));
      setCurrencyChange("ALL");
    } else {
      dispatch(updateCurrency("NONE"));
      setCurrencyChange("NONE");
    }
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
            <span>Choose Currency</span>
            <Select
              onChange={handleChangeCurrency}
              autoWidth
              label="currency"
              style={{ padding: 0, borderRadius: 2 }}
            >
              <MenuItem onClick={updateCurrenyEur}>€</MenuItem>
              <MenuItem onClick={updateCurrenyALL}>ALL</MenuItem>
            </Select>
          </MenuItem>
          <MenuItem onClick={signout}>Sign Out</MenuItem>
        </Menu>
      </div>
    </nav>
  );
};

export default NavBar;
