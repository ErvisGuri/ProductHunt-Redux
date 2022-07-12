import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cartSlice";

import "./Product.css";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Button } from "antd";

const Product = ({ item }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { img, id, title, desc, price, currency } = item;

  const navigateToProduct = (item) => {
    navigate("/products", { state: item });
  };

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  return (
    <>
      <div className="product_container">
        <article key={id} className="article">
          <div onClick={() => navigateToProduct(item)} className="img_title">
            <picture>
              <img
                className="img"
                src={img}
                style={{ width: "60px", borderRadius: "10px" }}
              />
            </picture>
            <div>
              <h2 className="title-product">{title}</h2>
            </div>
          </div>
          <div className="productDsc">{desc}</div>
          <div className="price-product">
            <Button className="btnCard" onClick={() => handleAddToCart(item)}>
              Add to Card
              <ShoppingCartOutlined style={{ cursor: "pointer" }} />
            </Button>
            {price}
            {currency}
          </div>
        </article>
      </div>
    </>
  );
};

export default Product;
