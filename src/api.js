const baseUrl = "http://localhost:3000";

export function fetchReviews() {
  return fetch(`${baseUrl}/reviews`).then((response) => {
    if (!response.ok) {
      throw new Error(`Error fetching reviews: ${response.statusText}`);
    }
    return response.json();
  });
}

export function fetchReviewById(id) {
  return fetch(`${baseUrl}/reviews/${id}`).then((response) => {
    if (!response.ok) {
      throw new Error(`Error fetching review: ${response.statusText}`);
    }
    return response.json();
  });
}

export function addReview(data) {
  return fetch(`${baseUrl}/reviews/create`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json",
    },
  }).then((response) => {
    if (!response.ok) {
      throw new Error(`Error adding review: ${response.statusText}`);
    }
    return response.json();
  });
}

export function updateReview(id, data) {
  return fetch(`${baseUrl}/reviews/update/${id}`, {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json",
    },
  }).then((response) => {
    if (!response.ok) {
      throw new Error(`Error updating review: ${response.statusText}`);
    }
    return response.json();
  });
}

export function deleteReview(id) {
  return fetch(`${baseUrl}/reviews/delete/${id}`, {
    method: "DELETE",
  }).then((response) => {
    if (!response.ok) {
      throw new Error(`Error deleting review: ${response.statusText}`);
    }
  });
}
