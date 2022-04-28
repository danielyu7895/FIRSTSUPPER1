import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navigation,
  Footer,
  Home,
  Contact,
  Form
} from "./components";

ReactDOM.render(
  <Router>
    <Navigation />
    <Routes>
      {/*<Route path="/" element={<Home />} />*/}
      <Route path="/form" element={<Form />} />
      {/*<Route path="/contact" element={<Contact />} />*/}
    </Routes>
    <Footer />
  </Router>,

  document.getElementById("root")
);

// serviceWorker.unregister();