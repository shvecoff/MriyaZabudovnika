import { Route } from "react-router-dom";
import Header from "./Components/Header";
import DB from "./db.json";
import "animate.css";

import Footer from "./Components/Footer";
import Home from "./Page/Home.jsx";
import Offer from "./Page/Offer.jsx";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <main className="main">
        <Route path="/" exact>
          <Home DB={DB} />
        </Route>
        <Route path="/offer">
          <Offer />
        </Route>
      </main>
      <Footer />
    </div>
  );
}

export default App;
