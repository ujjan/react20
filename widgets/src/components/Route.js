import React from "react";

const Route = (props) => {
  return window.location.pathname === props.path ? props.children : null;
};

export default Route;
