import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import routes from "../routes";
import { connect } from "react-redux";
import authSelectors from "../redux/auth/authSelectors";

const styles = {
  link: {
    display: "inline-block",
    textDecoration: "none",
    padding: 12,
    fontWeight: 700,
    color: "white",
    backgroundColor: "blue",
    border: "1px solid grey",
    borderRadius: "5px",
    marginRight: "10px",
    width: "100px",
  },
  activeLink: {
    color: "#E84A5F",
  },
  container: {
    width: "100%",
    textAlign: "center",
  },
  title: {
    color: "black",
  },
};

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
      <div style={styles.container}>
        <h1 style={styles.title}>Home page</h1>
        <NavLink variant="outline-primary" to={routes.LoginView} style={styles.link} activeStyle={styles.activeLink}>
          {" "}
          Login
        </NavLink>
        <NavLink to={routes.RegisterView} style={styles.link} activeStyle={styles.activeLink}>
          {" "}
          Registration
        </NavLink>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  isAuthenticated: authSelectors.isAuthenticated(state),
});
export default connect(mapStateToProps, null)(HomeView);
