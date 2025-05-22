import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "./style/home.css";
import "./style/nav.css";
import Nav from "./component/nav";
import Footer from "./component/footer";
import Home1 from "./page/home1";
import Home2 from "./page/home2";
import Feature from "./page/feature";
import Support from "./page/support";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home1 />
              <Home2 />
            </>
          }
        />
        <Route path="/feature" element={<Feature />} />

        <Route path="/support" element={<Support />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
