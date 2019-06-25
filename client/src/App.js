import React from "react";
import "./App.css";
import Register from "./components/Register";
import { Route } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/register" render={props => <Register {...props} />} />
      </div>
    </div>
  );
}

export default App;
