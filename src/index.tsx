import * as React from "react";
import { render } from "react-dom";

import "./styles.css";
import "bulma/css/bulma.css";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="">
      <Hero />
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
