import React from "react";
import "./App.css";
import Register from "./components/Register";
import Login from "./components/Login";
import { Route } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import Home from "./components/Home";
import { connect } from "react-redux";
import { registerUser, loginUser } from "./store/actions/authActions";
import SingleTicket from "./components/SingleTicket";

function App({ registerUser, loginUser, loading, error, tickets }) {
  return (
    <div>
      <div>
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

        <PrivateRoute path="/tickets/:id" component={SingleTicket} />

        <PrivateRoute exact path="/" component={Home} />
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    loading: state.authReducer.loading,
    error: state.authReducer.error,
    tickets: state.ticketReducer.tickets
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
