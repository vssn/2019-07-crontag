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
              <a class="button is-link">Parlamentswahlen</a>
              <a class="button is-link">Bundesliga</a>
              <a class="button is-link">Mondlandung</a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
