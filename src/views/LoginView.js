import React, { Component } from "react";
import routes from "../routes";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import authOperations from "../redux/auth/authOperations";
import authSelectors from "../redux/auth/authSelectors";

const styles = {
  form: {
    margin: "0 auto",
    width: 320,
  },
  label: {
    display: "flex",
    flexDirection: "column",
    padding: 4,
    marginBottom: "10px",
  },
  container: {
    width: "320px",
    margin: "0 auto",
    textAlign: "left",
    padding: "10px",
  },
  button: {
    height: "35px",
    width: "100px",
    color: "white",
    backgroundColor: "blue",
    border: "1px solid grey",
    borderRadius: "5px",
  },
  link: {
    textAlign: "center",
    display: "inline-block",
    textDecoration: "none",
    color: "white",
    backgroundColor: "blue",
    border: "1px solid grey",
    borderRadius: "5px",
    padding: "4px",
    width: "90px",
  },
};

class LoginView extends Component {
  state = {
    email: "",
    password: "",
  };
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
  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onLogin({ ...this.state });
    this.setState({ name: "", email: "", password: "" });
  };
  render() {
    const { email, password } = this.state;
    return (
      <div style={styles.container}>
        <NavLink style={styles.link} to={routes.HomeView}>
          {" "}
          Back
        </NavLink>
        <h1>Login page</h1>

        <form style={styles.form} onSubmit={this.handleSubmit}>
          <label style={styles.label}>
            Email
            <input required type="email" name="email" value={email} onChange={this.handleChange} />
          </label>

          <label style={styles.label}>
            Password
            <input required type="password" name="password" value={password} onChange={this.handleChange} />
          </label>

          <button style={styles.button} type="submit">
            Login
          </button>
        </form>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  isAuthenticated: authSelectors.isAuthenticated(state),
});
export default connect(mapStateToProps, { onLogin: authOperations.logIn })(LoginView);
