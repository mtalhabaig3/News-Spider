import "./App.css";

import React, { Component, useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import LoadingBar from "react-top-loading-bar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App(props) {
  const apiKey = process.env.REACT_APP_NEWS_API;

  const [progress, setProgress] = useState(0);

  return (
    <>
      <Router>
        <Navbar />
        <LoadingBar color="#f11946" progress={progress} height={3} />
        <Routes>
          <Route
            path="/business"
            element={
              <News
                setProgress={setProgress}
                pageSize={6}
                country="us"
                category="business"
                key="business"
                apiKey={apiKey}
              />
            }
          ></Route>
          <Route
            path="/entertainment"
            element={
              <News
                setProgress={setProgress}
                pageSize={6}
                country="us"
                category="entertainment"
                key="entertainment"
                apiKey={apiKey}
              />
            }
          ></Route>
          <Route
            path="/health"
            element={
              <News
                setProgress={setProgress}
                pageSize={6}
                country="us"
                category="health"
                key="health"
                apiKey={apiKey}
              />
            }
          ></Route>
          <Route
            path="/science"
            element={
              <News
                setProgress={setProgress}
                pageSize={6}
                country="us"
                category="science"
                key="science"
                apiKey={apiKey}
              />
            }
          ></Route>
          <Route
            path="/sports"
            element={
              <News
                setProgress={setProgress}
                pageSize={6}
                country="us"
                category="sports"
                key="sports"
                apiKey={apiKey}
              />
            }
          ></Route>
          <Route
            path="/technology"
            element={
              <News
                setProgress={setProgress}
                pageSize={6}
                country="us"
                category="technology"
                key="technology"
                apiKey={apiKey}
              />
            }
          ></Route>
        </Routes>
      </Router>
    </>
  );
}
