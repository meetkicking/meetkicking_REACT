import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";

const root = ReactDom.createRoot(document.getElementById("root"));

//root.render(
  //React.createElement("h1", null, "Hello, React!")
//)

root.render(
  <div title="DoggO">
    <h1>Hello</h1>
    <h2>
      <mark>React</mark>
      </h2>
  </div>
)