import React from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";

const items = [
  {
    title: "what is React?",
    content:
      "React is front end javascript framewok to create single page applications",
  },
  {
    title: "Why use React?",
    content: "Its Easy and very simple library to use",
  },
  {
    title: "How to use React?",
    content: "You use it throw installing som libraries and its really easy",
  },
];

export default () => {
  return (
    <div className="ui container">
      <Search></Search>
    </div>
  );
};
