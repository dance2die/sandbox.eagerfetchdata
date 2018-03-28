import React from "react";
import { render } from "react-dom";
import ExampleComponent from "./ExampleComponent";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <div style={styles}>
    <h2>Some posts {"\u272a"}</h2>
    {[...Array(10).keys()].map(i => <ExampleComponent key={i} id={i + 1} />)}
  </div>
);

render(<App />, document.getElementById("root"));
