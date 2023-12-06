import React, { useEffect } from "react";
import "./../Home.css";

const Home = () => {
  useEffect(() => {
    document.title = "The Little Corner Cafe";
    return () => {};
  }, []);

  return (
    <div className="home-container">
      <h1>Welcome to The Little Corner Cafe!</h1>
      <img
        className="home-image"
        src="https://www.posist.com/restaurant-times/wp-content/uploads/2023/07/How-To-Start-A-Coffee-Shop-Business-A-Complete-Guide.jpg"
        alt="Coffee Shop"
      />
      <p></p>
      <p></p>
      <p>
        The Little Corner Cafe has been around for only the last 5 years!
        However, we have expanded to many locations within Los Angeles and San
        Fransisco. Feel free to look around our site for locations, our menu,
        and to subscribe!{" "}
      </p>
    </div>
  );
};

export default Home;
