import React from "react";
import { createStore } from "redux";

const store = createStore(reducer);

const HelloWorld = ({ tech }) => {
  return (
    <div className="hello-world">
      Hello World <span className="hello-world__tech">{tech}!</span>
    </div>
  );
};

export default HelloWorld;
