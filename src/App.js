import React from "react";
import { BrowserRouter } from "react-router-dom";
import Layout from "./core/layout/layout";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Layout />
      </div>
    </BrowserRouter>
  );
}

export default App;
