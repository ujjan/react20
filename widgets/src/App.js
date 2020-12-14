import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Rout from "./components/Route";
import Header from "./components/Header";

const items = [
  {
    title: "What is React?",
    content: "React is a front end javascript framework",
  },
  {
    title: "Why use React?",
    content: "React is a favorite JS library among engineers",
  },
  {
    title: "How do you use React?",
    content: "You use React by creating components",
  },
];

const options = [
  {
    label: "The Color Red",
    value: "red",
  },
  {
    label: "The Color Green",
    value: "green",
  },
  {
    label: "A Shade of Blue",
    value: "blue",
  },
];

export default () => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div>
      <Header></Header>
      <hr></hr>
      <Rout path="/">
        <Accordion items={items}></Accordion>
      </Rout>
      <Rout path="/list">
        <Search></Search>
      </Rout>
      <Rout path="/dropdown">
        <Dropdown
          label="Select the color"
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        ></Dropdown>
      </Rout>
      <Rout path="/translate">
        <Translate></Translate>
      </Rout>
    </div>
  );
};
