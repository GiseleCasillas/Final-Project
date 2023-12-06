import React, { useState, useEffect } from "react";
import ReviewBox from "./ReviewBox";
import ReviewForm from "./ReviewForm";
import { fetchReviews, addReview, updateReview, deleteReview } from ".././api";

const ReviewPage = () => {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({
    author: "",
    rating: 0,
    content: "",
  });

  useEffect(() => {
    loadReviews();
  }, []);

  const loadReviews = () => {
    fetchReviews()
      .then((data) => {
        setReviews(data);
      })
      .catch((error) => {
        console.error(`Error fetching reviews: ${error.message}`);
      });
  };

  const addReviewHandler = () => {
    addReview(newReview)
      .then((data) => {
        setReviews([...reviews, data]);
        setNewReview({
          author: "",
          rating: 0,
          content: "",
        });
      })
      .catch((error) => {
        console.error(`Error adding review: ${error.message}`);
      });
  };

  const updateReviewHandler = (id, updatedReview) => {
    updateReview(id, updatedReview)
      .then((data) => {
        setReviews(reviews.map((review) => (review.id === id ? data : review)));
      })
      .catch((error) => {
        console.error(`Error updating review: ${error.message}`);
      });
  };

  const deleteReviewHandler = (id) => {
    deleteReview(id)
      .then(() => {
        setReviews(reviews.filter((review) => review.id !== id));
      })
      .catch((error) => {
        console.error(`Error deleting review: ${error.message}`);
      });
  };

  return (
    <div>
      <h1>Reviews</h1>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <ReviewBox
              author={review.author}
              rating={review.rating}
              content={review.content}
            />

            <button
              onClick={() =>
                updateReviewHandler(review.id, { content: "Updated Content" })
              }
            >
              Update
            </button>

            <button onClick={() => deleteReviewHandler(review.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
      <div>
        <h2>Add a Review</h2>
        <ReviewForm addReview={addReviewHandler} />
      </div>
    </div>
  );
};

export default ReviewPage;
