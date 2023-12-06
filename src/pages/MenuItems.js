import React from "react";
import { Link } from "react-router-dom";

const MenuItem = ({ id, name, price }) => {
  return (
    <div className="menu-item">
      <div className="item-info">
        <p className="id">{id}</p>
        <Link to={`/menu/${id}`} className="name">
          {name}
        </Link>
        <p className="price">${price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default MenuItem;
