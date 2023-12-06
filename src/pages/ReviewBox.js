import React from "react";
import ".././ReviewBox.css";

const ReviewBox = ({ author, rating, content }) => {
  return (
    <div className="reviewBox">
      <div className="header">
        <h3>{author}</h3>
      </div>
      <div className="rating">
        <p>Rating: {rating}</p>
      </div>
      <div className="content">
        <p>{content}</p>
      </div>
    </div>
  );
};

export default ReviewBox;
