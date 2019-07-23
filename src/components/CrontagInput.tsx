import "react-dom";
import React, { useState } from "react";

export default function CrontagInput(): JSX.Element {
  let [showInput, setState] = useState(false);

  function toggleObserveInput() {
    setState(!showInput);
  }

  return (
    <div className="container">
      {showInput ? (
        <div className="field">
          <div className="control">
            <input
              className="input is-large is-info"
              type="text"
              placeholder="Begriff beobachten"
            />
          </div>
        </div>
      ) : (
        <h1
          onClick={() => toggleObserveInput()}
          className="title has-text-link"
        >
          Begriff beobachten
        </h1>
      )}
    </div>
  );
}
