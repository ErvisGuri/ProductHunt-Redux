import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { Button, Drawer, Space } from "antd";
import { Input, Select } from "antd";
import { DatePicker } from "antd";
import { useDispatch } from "react-redux";
import { addReviews } from "../../features/reviewSlice";

const { TextArea } = Input;

const ReviewModal = ({ rew }) => {
  const [visible, setVisible] = useState(false);
  const [size, setSize] = useState();
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [country, setCountry] = useState(null);
  const [descrip, setDescrip] = useState("");
  // const [selectedCountry, setSelectedCountry] = useState(0);

  // const BASE_URL = "https://restcountries.com/v3.1/all";

  const dispatch = useDispatch();

  // useEffect(() => {
  //   axios.get(BASE_URL).then((res) => console.log(setCountry(res)));
  // }, [selectedCountry]);

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

  const countryHandler = () => {
    setCountry(country);
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
            <Button type="primary" onClick={addReviewPost}>
              Post
            </Button>
          </Space>
        }
      >
        <div
          value={name}
          onChange={nameHandler}
          className="reviewName"
          style={{ marginLeft: "150px", marginBottom: "3px" }}
        >
          Name:
          <Input style={{ width: "300px", marginLeft: "23px" }} />
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
        <div
          value={country}
          onChange={countryHandler}
          className="country"
          style={{ marginLeft: "150px", marginBottom: "3px" }}
        >
          Country:
          <Select style={{ width: "300px", marginLeft: "11px" }}>
            {country}
          </Select>
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
