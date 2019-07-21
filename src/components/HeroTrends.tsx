import "react-dom";
import React, { Component } from "react";

export default class HeroTrends extends Component {
  render() {
    return (
      <section className="section">
        <div className="container">
          <div className="notification">
            <h2 className="title is-6">Crontags im Trend</h2>
            <div className="buttons">
              <button className="button is-link">Parlamentswahlen</button>
              <button className="button is-link">Bundesliga</button>
              <button className="button is-link">Mondlandung</button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
