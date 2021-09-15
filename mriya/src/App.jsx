import React from "react";
import { Route } from "react-router-dom";
import Header from "./Components/Header";
import DB from "./db.json";
import "animate.css";

import Footer from "./Components/Footer";
import Home from "./Page/Home.jsx";
import Offer from "./Page/Offer.jsx";
import Service from "./Page/Service.jsx";
import Contact from "./Page/Contact.jsx";
import Gallery from "./Page/Gallery.jsx";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <main className="main">
        <Route path="/" exact>
          <Home DB={DB} />
        </Route>
        <Route path="/offer">
          <Offer DB={DB} />
        </Route>
        <Route path="/service">
          <Service />
        </Route>
        <Route path="/gallery">
          <Gallery DB={DB} />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </main>
      <Footer />
    </div>
  );
}

export default App;
