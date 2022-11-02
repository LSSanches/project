import React from "react";

import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather city="New York" />
        <footer>
          Created by{" "}
          <a
            href="www.linkedin.com/in/laurassanches"
            target="_blank"
            rel="noreferrer"
          >
            LSanches
          </a>
          , open-sourced on{" "}
          <a
            href="https://github.com/LSSanches/project"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://weatherappprojectbylaura.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
          .
        </footer>
      </div>
    </div>
  );
}
