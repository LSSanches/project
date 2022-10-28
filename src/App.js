import React from "react";

import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather city="Toronto" />
        <footer>
          This project was created by LSanches and its open-sourced at{" "}
          <a
            href="https://github.com/LSSanches/project"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
