//Create a react app from scratch.
import React from "react";
import ReactDom from "react-dom";
//It should display a h1 heading.
ReactDom.render(
  <div>
    <h1>My Favourite Foods</h1>
    <ul>
      <li>Nanchos</li>
      <li>Mangos</li>
      <li>Avocados</li>
    </ul>
  </div>,
  document.getElementById("root")
);

//It should contain 3 list elements.
