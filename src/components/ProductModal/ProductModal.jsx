import React, { useState } from "react";

import "antd/dist/antd.css";
import { Button, Drawer } from "antd";
import { Input, Select } from "antd";
import { useDispatch } from "react-redux";
import { addProduct } from "../../features/productsSlice";

const { Option } = Select;
const { TextArea } = Input;

const ProductModal = () => {
  const [visible, setVisible] = useState(false);
  const [img, setImg] = useState("");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [currency, setCurrency] = useState("");

  const dispatch = useDispatch();

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const imgHandleChange = (e) => {
    setImg(e.target.value);
  };

  const titleHandleChange = (e) => {
    setTitle(e.target.value);
  };

  const descHandlerChange = (e) => {
    setDesc(e.target.value);
  };

  const priceHandlerChange = (e) => {
    setPrice(e.target.value);
  };

  const currenctHandlerChange = (e) => {
    setCurrency(e);
  };

  const clearInput = () => {
    setImg("");
    setTitle("");
    setDesc("");
    setPrice("");
    setCurrency("");
  };

  const addNewProduct = (e) => {
    e.preventDefault();
    const id = Math.floor(Math.random() * 100);
    dispatch(
      addProduct({
        img: img,
        title: title,
        desc: desc,
        price: price,
        currency: currency,
        id: id,
      })
    );
    clearInput();
    onClose();
  };

  return (
    <>
      <Button
        type="primary"
        onClick={showDrawer}
        style={{
          borderRadius: "12px",
          backgroundColor: "rgba(39, 43, 48, 0.979)",
          color: "white",
        }}
      >
        Add Product
      </Button>
      <Drawer
        mask={true}
        maskStyle={{ backgroundColor: "rgba(39, 43, 48, 0.979)" }}
        title="Add a New Product"
        placement="right"
        onClose={onClose}
        visible={visible}
      >
        <div className="modalImgUrl">
          Image Url:
          <Input
            value={img}
            onChange={imgHandleChange}
            addonBefore="http://"
            style={{
              width: "250px",
              height: "35px",
              marginLeft: "16px",
              marginBottom: "1px",
            }}
          />
        </div>
        <div className="modalTitle">
          Title:
          <Input
            value={title}
            onChange={titleHandleChange}
            style={{ width: "250px", marginLeft: "50px", marginBottom: "4px" }}
          />
        </div>
        <div className="modalPrice">
          Price:
          <Input
            value={price}
            onChange={priceHandlerChange}
            type="number"
            style={{ width: "150px", marginLeft: "47px", marginBottom: "10px" }}
          />
          <Select
            value={currency}
            onChange={currenctHandlerChange}
            style={{ width: "100px", height: "30px" }}
            placeholder="Currency"
          >
            <Option value="$">$</Option>
            <Option value="€">€</Option>
            <Option value="ALL">ALL</Option>
          </Select>
        </div>
        <div className="modalDetails">
          Product details:
          <TextArea
            value={desc}
            onChange={descHandlerChange}
            rows={8}
            style={{ marginBottom: "30px" }}
          />
        </div>
        <Button
          onClick={addNewProduct}
          style={{
            borderRadius: "12px",
            marginLeft: "220px",
            backgroundColor: "rgba(39, 43, 48, 0.979)",
            color: "white",
          }}
        >
          Add Product
        </Button>
      </Drawer>
    </>
  );
};

export default ProductModal;
