import React, { useState } from "react";
import "./../ReviewForm.css";

const ReviewForm = ({ addReview }) => {
  const [newReview, setNewReview] = useState({
    author: "",
    rating: 0,
    content: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addReview(newReview);
    setNewReview({
      author: "",
      rating: 0,
      content: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Your Name:
        <input
          type="text"
          value={newReview.author}
          onChange={(e) =>
            setNewReview({ ...newReview, author: e.target.value })
          }
        />
      </label>
      <br />
      <label>
        Rating:
        <input
          type="number"
          value={newReview.rating}
          min="1"
          max="10"
          onChange={(e) =>
            setNewReview({ ...newReview, rating: parseInt(e.target.value, 10) })
          }
        />
      </label>
      <br />
      <label>
        Comment:
        <textarea
          value={newReview.content}
          onChange={(e) =>
            setNewReview({ ...newReview, content: e.target.value })
          }
        />
      </label>
      <br />
      <button type="submit">Submit Review</button>
    </form>
  );
};

export default ReviewForm;
