import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import Layout from "./core/layout/layout";

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
