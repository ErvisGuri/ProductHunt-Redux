import React, { useState } from "react";

import "./ProductList.css";
import "antd/dist/antd.css";

//Importing Components
import { DownOutlined } from "@ant-design/icons";
import { Menu, message, Space } from "antd";
import Product from "../Product/Product";
import ProductModal from "../ProductModal/ProductModal";
import { useSelector } from "react-redux";
import { selectProduct } from "../../features/productsSlice";

const ProductList = () => {
  const Products = useSelector(selectProduct);

  const onClick = ({ key }) => {
    message.info(`Click on item ${key}`);
  };

  const menu = (
    <Menu
      onClick={onClick}
      items={[
        {
          label: "1st menu item",
          key: "1",
        },
      ]}
    />
  );

  return (
    <div className="main_container">
      <div className="addProduct_container">
        <div className="productModal">
          <ProductModal />
        </div>
        <div className="sort">
          <h3>Sort by :</h3>
          <DownOutlined style={{ marginTop: "8px" }} />
        </div>
      </div>
      <div className="productList_container">
        {Products?.map((item, i) => (
          <Product item={item} key={i} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
