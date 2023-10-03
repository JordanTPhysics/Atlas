import React from "react";

function Menu({ menuItems, backgroundImage, title }) {
  const styles = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    display: "flex",
    justifyContent: "center" /* Horizontally center the image */,
    alignItems: "center",
    alignText: "center",
    color: "black",
  };


  const itemElements = menuItems.map((item) => (
    <li className="list-item" key={item.id}>
      <div className="id">{item.id}</div>
      <div className="divider"></div>
      <div className="value">{item.value}</div>
    </li>
  ));

  return (
    <div className="menu">
      <h2 style={styles} className="title">{title}</h2>
      <ol>{itemElements}</ol>
    </div>
  );
}
export default Menu;
