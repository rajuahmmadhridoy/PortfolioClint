import "./Styles/App.scss";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Component/Home/Home";
import About from "./Component/About/About";
import Contact from "./Component/Contact/Contact";
import Works from "./Component/Works/Works";
import Blog from "./Component/Blog/Blog";

// lodder cod
import { useState, useEffect } from "react";
import { css } from "@emotion/react";
import HashLoader from "react-spinners/HashLoader";

function App() {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#00B1BD");
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <div className="App">
      {loading ? (
        <div className="lodder">
          <HashLoader color={color} loading={loading} size={150} />
        </div>
      ) : (
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/works">
              <Works />
            </Route>
            <Route path="/blog">
              <Blog />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
        </Router>
      )}
    </div>
  );
}

export default App;
