import "react-dom";
import React, { Component } from "react";
import HeroTrends from "./HeroTrends";

export default class Hero extends Component<{}, { showObserveInput: boolean }> {
  constructor(props) {
    super(props);

    this.state = {
      showObserveInput: false
    };
  }

  toggleObserveInput() {
    this.setState({ showObserveInput: !this.state.showObserveInput });
  }

  render() {
    return (
      <section className="hero hero--app">
        <div className="hero-body">
          {!this.state.showObserveInput ? (
            <section
              onClick={() => this.toggleObserveInput()}
              className="section"
            >
              <img alt="crontag" src="media/crontag.png" />
            </section>
          ) : (
            <section className="section">
              <div className="container">
                <div className="notification">
                  <div className="container">
                    <div className="field">
                      <div className="control">
                        <input
                          className="input"
                          type="text"
                          placeholder="crontag"
                        />
                      </div>
                      <p className="help">
                        Gib einen Begriff ein, den du beobachten möchtest
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}
          <HeroTrends />
        </div>
      </section>
    );
  }
}
