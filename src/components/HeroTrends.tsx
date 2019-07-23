import "react-dom";
import React, { Component } from "react";

export default class HeroTrends extends Component {
  render(): JSX.Element {
    return (
      <section className="section">
        <div className="container">
          <div className="notification has-background-primary">
            <h2 className="title is-6 has-text-white">Crontags im Trend</h2>
            <div className="buttons">
              <button className="button is-outlined is-white">
                Parlamentswahlen
              </button>
              <button className="button is-outlined is-white">
                Bundesliga
              </button>
              <button className="button is-outlined is-white">
                Mondlandung
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
