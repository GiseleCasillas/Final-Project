import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import menuData from ".././db.json";
import "./../MenuItemImage.css";

const MenuItemImage = () => {
  const { id } = useParams();
  const [menuItem, setMenuItem] = useState([]);
  const [focusedItem, setFocusedItem] = useState(null);

  useEffect(() => {
    setMenuItem(menuData.coffeeItems);
  }, []);

  useEffect(() => {
    const item = menuItem.find((item) => item.id == id);
    setFocusedItem(item);
    document.title = `${item ? item.name : "Loading"} - The Little Corner Cafe`;
  }, [id, menuItem]);

  return (
    <div className="menu-item-details">
      <>
        <h2>{focusedItem.name}</h2>
        <img src={focusedItem.image} alt={focusedItem.name} />
        <p></p>
      </>
    </div>
  );
};

export default MenuItemImage;
