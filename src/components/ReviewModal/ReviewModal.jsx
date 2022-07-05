import React from "react";

import "./ReviewModal.css";
import { useState } from "react";
import { Button, Drawer, Space } from "antd";
import { Input } from "antd";
import { DatePicker } from "antd";
import { useDispatch } from "react-redux";
import { addReviews } from "../../features/reviewSlice";
import CountryDropdown from "country-dropdown-with-flags-for-react";
const { TextArea } = Input;

const ReviewModal = ({ rew }) => {
  const [visible, setVisible] = useState(false);
  const [size, setSize] = useState();
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [country, setCountry] = useState("");
  const [descrip, setDescrip] = useState("");

  const dispatch = useDispatch();

  const showLargeDrawer = () => {
    setSize("large");
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const nameHandler = (e) => {
    setName(e.target.value);
  };

  const dateHandler = (e) => {
    const dateFormat = "MM/DD/YYYY";
    setDate(e.format(dateFormat));
  };

  const countryHandler = (e) => {
    setCountry(e.target.value);
  };

  const descripHandler = (e) => {
    setDescrip(e.target.value);
  };

  const clearInput = () => {
    setName("");
    setDate("");
    setCountry("");
    setDescrip("");
  };

  const addReviewPost = (e) => {
    e.preventDefault();
    dispatch(
      addReviews({
        name: name,
        date: date,
        country: country,
        descrip: descrip,
      })
    );
    clearInput();
    onClose();
  };

  return (
    <>
      <Space>
        <Button
          type="primary"
          onClick={showLargeDrawer}
          style={{ backgroundColor: "rgba(39, 43, 48, 0.979)" }}
        >
          Write a Review
        </Button>
      </Space>
      <Drawer
        mask={true}
        maskStyle={{ backgroundColor: "rgba(39, 43, 48, 0.979)" }}
        title={`Write a Review`}
        placement="right"
        size={size}
        onClose={onClose}
        visible={visible}
        extra={
          <Space>
            <Button
              type="primary"
              onClick={addReviewPost}
              style={{ backgroundColor: "rgba(39, 43, 48, 0.979)" }}
            >
              Post
            </Button>
          </Space>
        }
      >
        <div
          className="reviewName"
          style={{ marginLeft: "150px", marginBottom: "3px" }}
        >
          Name:
          <Input
            value={name}
            onChange={nameHandler}
            style={{ width: "300px", marginLeft: "23px" }}
          />
        </div>
        <div
          className="date"
          style={{ marginLeft: "150px", marginBottom: "3px" }}
        >
          Date:
          <DatePicker
            style={{ width: "300px", marginLeft: "31px" }}
            defaultValue={date}
            onChange={dateHandler}
          />
        </div>
        <div className="country" style={{ marginBottom: "3px" }}>
          <div style={{ marginLeft: "24px" }}>Country:</div>
          <CountryDropdown
            value={country}
            handleChange={countryHandler}
            className="YOUR_CSS_CLASS"
            preferredCountries={["gb", "us"]}
            style={{}}
          ></CountryDropdown>
        </div>
        <div
          value={descrip}
          onChange={descripHandler}
          className="ReviewText"
          style={{ marginLeft: "113px", marginBottom: "3px" }}
        >
          Product details:
          <TextArea style={{ width: "300px", marginLeft: "5px" }} rows={8} />
        </div>
      </Drawer>
    </>
  );
};

export default ReviewModal;
