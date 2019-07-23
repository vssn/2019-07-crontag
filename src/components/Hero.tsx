import "react-dom";
import React, { Component } from "react";
import CrontagInput from "./CrontagInput";

export default class Hero extends Component<{}> {
  render(): JSX.Element {
    return (
      <section className="hero hero--app">
        <div className="hero-body">
          <section className="section ">
            <h1 className="title has-text-primary is-1">
              Behalte das Gesamtbild tagesaktueller Themen im Auge.
            </h1>
          </section>
          <section className="section">
            <CrontagInput />
          </section>
        </div>
      </section>
    );
  }
}
