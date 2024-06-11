import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  pageSize = 6;
  apiKey=process.env.REACT_APP_APIKEY
  
  state = {
    progress: 0,
  };
  setProgress = (progress) => {
    this.setState({ progress: progress });
  };
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
            color="#f11946"
            height={3}
            progress={this.state.progress}
          />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  pageSize={this.pageSize}
                  country="in"
                  category="general"
                ></News>
              }
            ></Route>
            <Route
              exact
              path="/business"
              element={
                <News
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  key="business"
                  pageSize={6}
                  country="in"
                  category="business"
                ></News>
              }
            ></Route>
            <Route
              exact
              path="/Entertainment"
              element={
                <News
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  key="entertainment"
                  pageSize={6}
                  country="in"
                  category="entertainment"
                ></News>
              }
            ></Route>
            <Route
              exact
              path="/General"
              element={
                <News
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  key="general"
                  pageSize={6}
                  country="in"
                  category="general"
                ></News>
              }
            ></Route>
            <Route
              exact
              path="/Health"
              element={
                <News
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  key="health"
                  pageSize={6}
                  country="in"
                  category="health"
                ></News>
              }
            ></Route>
            <Route
              exact
              path="/Sports"
              element={
                <News
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  key="sports"
                  pageSize={6}
                  country="in"
                  category="sports"
                ></News>
              }
            ></Route>
            <Route
              exact
              path="/Science"
              element={
                <News
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  key="science"
                  pageSize={6}
                  country="in"
                  category="science"
                ></News>
              }
            ></Route>
            <Route
              exact
              path="/Technology"
              element={
                <News
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  key="technology"
                  pageSize={6}
                  country="in"
                  category="technology"
                ></News>
              }
            ></Route>
          </Routes>
        </Router>
      </div>
    );
  }
}
