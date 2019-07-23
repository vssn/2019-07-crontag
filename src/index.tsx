import * as React from "react";
import { render } from "react-dom";

import "./styles.css";
import "bulma/css/bulma.css";
import Hero from "./components/Hero";
import HeroTrends from "./components/HeroTrends";

function App() {
  return (
    <div className="">
      <nav
        className="navbar is-light has-background-primary"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-end">
          <div className="navbar-item">
            <button className="button is-primary">Entdecken</button>
          </div>
          <div className="navbar-item">
            <button className="button is-primary">Log-In</button>
          </div>
        </div>
      </nav>
      <Hero />
      <HeroTrends />
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
