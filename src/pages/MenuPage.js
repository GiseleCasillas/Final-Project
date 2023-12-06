import React from "react";
import MenuItems from "./MenuItems";
import menuData from ".././db.json";
import { useState, useEffect } from "react";
import "./../MenuPage.css";

const MenuPage = () => {
  const [menuItems, setMenuItems] = useState([]);
  useEffect(() => {
    setMenuItems(menuData.coffeeItems);
    document.title = "Menu - The Little Corner Cafe";
  }, []);

  return (
    <div className="menu-page">
      <h1>Menu</h1>
      <div className="menu-list">
        {menuItems.map((item) => (
          <MenuItems
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default MenuPage;
