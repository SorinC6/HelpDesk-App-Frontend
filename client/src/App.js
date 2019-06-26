import React from "react";
import "./App.css";
import Register from "./components/Register";
import Login from "./components/Login";
import { Route } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import Home from "./components/Home";
import { connect } from "react-redux";
import { registerUser, loginUser } from "./store/actions/authActions";

function App({ registerUser, loginUser }) {
  return (
    <div>
      <div>
        <Route exact path="/" component={Home} />
        <Route
          path="/register"
          render={props => <Register {...props} registerUser={registerUser} />}
        />
        <Route
          path="/login"
          render={props => <Login {...props} loginUser={loginUser} />}
        />
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  debugger;
  return {};
};

const mapDispatchToProps = {
  registerUser,
  loginUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
