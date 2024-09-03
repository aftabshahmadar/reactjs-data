import React from "react";
import ReactDOM from "react-dom/client";
import Surname from "./components/srnm";

const root = ReactDOM.createRoot(document.getElementById("demo"));

root.render(
  <>
    <h1  style={{ color: "blue", fontSize: "50px" }}>My name is Aftab</h1>
    <Surname />
  </>
);
