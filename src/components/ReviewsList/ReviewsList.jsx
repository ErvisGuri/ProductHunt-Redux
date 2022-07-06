import React from "react";

import "./ReviewsList.css";

const ReviewsList = ({ review }) => {
  return (
    <div className="review_container">
      <div className="nameflag_container">
        <h2>{review.name}</h2> <h2>{review.country}</h2>
      </div>
      <div className="reviewDate">{review.date}</div>
      <div className="reviewDescrip">{review.descrip}</div>
    </div>
  );
};

export default ReviewsList;
