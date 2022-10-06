import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import LoadingBar from "react-top-loading-bar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Navbar />
          <LoadingBar color="#f11946" progress={40} height={3} />{" "}
          <Routes>
            <Route
              path="/business"
              element={
                <News
                  pageSize={6}
                  country="us"
                  category="business"
                  key="business"
                />
              }
            ></Route>
            <Route
              path="/entertainment"
              element={
                <News
                  pageSize={6}
                  country="us"
                  category="entertainment"
                  key="entertainment"
                />
              }
            ></Route>
            <Route
              path="/health"
              element={
                <News
                  pageSize={6}
                  country="us"
                  category="health"
                  key="health"
                />
              }
            ></Route>
            <Route
              path="/science"
              element={
                <News
                  pageSize={6}
                  country="us"
                  category="science"
                  key="science"
                />
              }
            ></Route>
            <Route
              path="/sports"
              element={
                <News
                  pageSize={6}
                  country="us"
                  category="sports"
                  key="sports"
                />
              }
            ></Route>
            <Route
              path="/technology"
              element={
                <News
                  pageSize={6}
                  country="us"
                  category="technology"
                  key="technology"
                />
              }
            ></Route>
          </Routes>
        </Router>
      </>
    );
  }
}
