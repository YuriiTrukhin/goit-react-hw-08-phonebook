import React, { Component } from "react";
import { BrowserRouter, Redirect, Route, Switch, NavLink } from "react-router-dom";
import routes from "../routes";
import { connect } from "react-redux";
import authSelectors from "../redux/auth/authSelectors";

class HomeView extends Component {
  componentDidMount() {
    if (this.props.isAuthenticated) {
      this.props.history.replace("/contacts");
    }
  }
  componentDidUpdate() {
    if (this.props.isAuthenticated) {
      this.props.history.replace("/contacts");
    }
  }
  render() {
    return (
      <div>
        <h1>Home page</h1>
        <NavLink to={routes.LoginView}> Login</NavLink>
        <NavLink to={routes.RegisterView}> Registration</NavLink>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  isAuthenticated: authSelectors.isAuthenticated(state),
});
export default connect(mapStateToProps, null)(HomeView);
