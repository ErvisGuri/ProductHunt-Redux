import React, { useState, useEffect } from "react";

import "./NavBar.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectProduct, updateCurrency } from "../../features/productsSlice";
import { axios } from "axios";
import { selectUser, Signin, Signout } from "../../features/userSlice";
import { auth } from "../../firebase/firebase-config";

//Antd
import { ShoppingOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";

//Material UI
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";

const CURRENCY_RATES = "https://api.apilayer.com/exchangerates_data/latest?";

const NavBar = () => {
  const { cartTotalQuantity } = useSelector((state) => state.cart);
  const [anchorEl, setAnchorEl] = useState(null);
  const [currency, setCurrency] = useState();
  const [rate, setRate] = useState();
  // const [firstCurrency, setFirstCurrency] = useState();
  // const [secondCurrency, setSecondCurrency] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const products = useSelector(selectProduct);

  console.log(currency);

  // const updateCurrency = () => {
  //   dispatch(
  //     updateCurrency({
  //       currency: currency,
  //     })
  //   );
  //   handleClose();
  // };

  // async function getInitialRates(base, symbol) {
  //   getExchangeRates(base, symbol).then((response) =>
  //     setRate(response.data.rates[symbol])
  //   );
  // }

  // useEffect(() => {
  //   setFirstCurrency({ value: "EUR", label: "Euro" });
  //   setSecondCurrency({ value: "USD", label: "United States Dollar" });
  //   getInitialRates("EUR", "USD");
  // }, [rate]);

  // const getExchangeRates = (base, symbol) =>
  //   axios.get(CURRENCY_RATES, {
  //     params: {
  //       base: base,
  //       symbols: symbol,
  //     },
  //     headers: {
  //       apiKey: "m4VFmSvNiNSHiEKBSkRg92rcZYxXvS59",
  //     },
  //   });

  // console.log(rate);

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

  const updateDollar = () => {
    console.log("update");
    dispatch(updateCurrency({}));
  };

  const updateCurreny1 = (amount, currency) => {
    switch (currency) {
      case currency === "ALL":
        setCurrency({});
        break;
      case currency === "€":
        setCurrency({});
        break;
      default:
        setCurrency("");
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
              value={currency}
              onChange={handleChangeCurrency}
              autoWidth
              label="currency"
              style={{ padding: 0, borderRadius: 2 }}
            >
              <MenuItem onClick={updateDollar}>$</MenuItem>
              <MenuItem>€</MenuItem>
              <MenuItem>ALL</MenuItem>
            </Select>
          </MenuItem>
          <MenuItem onClick={signout}>Sign Out</MenuItem>
        </Menu>
      </div>
    </nav>
  );
};

export default NavBar;
