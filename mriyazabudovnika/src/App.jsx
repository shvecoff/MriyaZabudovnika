import React from "react";
import { Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Page/Home";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <main className="main">
        <Route path="/" exact component={Home} />
        <Route path="/service" />
        <Route path="/gallery" />
        <Route path="/contact" />
        <Route path="/about-us" />
      </main>
    </div>
  );
}

export default App;
