import React, { Component } from "react";
import { connect } from "react-redux";
import routes from "../routes";
import { NavLink } from "react-router-dom";
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
    padding: "10px",
    width: "320px",
    margin: "0 auto",
    textAlign: "left",
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
class RegisterView extends Component {
  state = {
    name: "",
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

    this.props.onRegister({ ...this.state });
    this.setState({ name: "", email: "", password: "" });
  };
  render() {
    const { name, email, password } = this.state;
    return (
      <div style={styles.container}>
        <NavLink style={styles.link} to={routes.HomeView}>
          {" "}
          Back
        </NavLink>
        <h1>Register page</h1>

        <form style={styles.form} onSubmit={this.handleSubmit}>
          <label style={styles.label}>
            Name
            <input required type="text" name="name" value={name} onChange={this.handleChange} />
          </label>

          <label style={styles.label}>
            Email
            <input required type="email" name="email" value={email} onChange={this.handleChange} />
          </label>

          <label style={styles.label}>
            Password
            <input required type="password" name="password" value={password} onChange={this.handleChange} />
          </label>

          <button style={styles.button} type="submit">
            Register
          </button>
        </form>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  isAuthenticated: authSelectors.isAuthenticated(state),
});
export default connect(mapStateToProps, { onRegister: authOperations.register })(RegisterView);
