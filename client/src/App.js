import React from "react";
import "./App.css";
import Register from "./components/Register";
import Login from "./components/Login";
import { Route } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import Home from "./components/Home";
import { connect } from "react-redux";
import { registerUser, loginUser } from "./store/actions/authActions";

function App({ registerUser, loginUser, loading, error }) {
  console.log("ERROROROR ",error)
  return (
    <div>
      <div>
        {/* <Route exact path="/" component={Home} /> */}
        <Route
          path="/register"
          render={props => (
            <Register
              {...props}
              registerUser={registerUser}
              loading={loading}
              error={error}
            />
          )}
        />
        <Route
          path="/login"
          render={props => (
            <Login
              {...props}
              loginUser={loginUser}
              loading={loading}
              error={error}
            />
          )}
        />

        <PrivateRoute path="/" component={Home} />
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    loading: state.authReducer.loading,
    error: state.authReducer.error
  };
};

const mapDispatchToProps = {
  registerUser,
  loginUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
