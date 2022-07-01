import React from "react";

import "./ProductReview.css";
import ReviewsList from "../ReviewsList/ReviewsList";
import ReviewModal from "../ReviewModal/ReviewModal";
import { useSelector } from "react-redux";
import { selectReview } from "../../features/reviewSlice";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";

const ProductReview = () => {
  const Review = useSelector(selectReview);
  const { state } = useLocation();
  const navigate = useNavigate();
  console.log(state);
  const navigateToProduct = () => {
    navigate("/products");
  };

  return (
    <div className="productreview_contariner">
      <div className="product1_container">
        <article key={state.id} className="article">
          <div className="img_title">
            <picture>
              <img
                className="img"
                src={state.img}
                style={{ width: "60px", borderRadius: "10px" }}
              />
            </picture>
            <div>
              <h2 className="title-product">{state.title}</h2>
            </div>
          </div>
          <div className="productDsc">{state.desc}</div>
          <div className="price-product">
            <Button>
              Add to Card
              <ShoppingCartOutlined style={{ cursor: "pointer" }} />
            </Button>
            {state.price}
            {state.currency}
          </div>
        </article>
      </div>
      <div className="reviewModal">
        <div
          style={{
            marginLeft: "20px",
            fontSize: "25px",
            marginBottom: "1px",
          }}
        >
          <u>Products Reviews</u>
        </div>
        <div style={{ marginBottom: "25px" }}>
          <ReviewModal />
        </div>
      </div>
      <div className="reviewList_container">
        {Review?.map((reviewing, i) => (
          <ReviewsList key={i} review={reviewing} />
        ))}
      </div>
    </div>
  );
};

export default ProductReview;
