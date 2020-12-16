import React, { Component } from "react";
import { connect } from "react-redux";
import routes from "../routes";
import { NavLink } from "react-router-dom";
import authOperations from "../redux/auth/authOperations";
import authSelectors from "../redux/auth/authSelectors";

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
      <div>
        <NavLink to={routes.HomeView}> Back</NavLink>
        <h1>Register page</h1>

        <form onSubmit={this.handleSubmit}>
          <label>
            Name
            <input type="text" name="name" value={name} onChange={this.handleChange} />
          </label>

          <label>
            Email
            <input type="email" name="email" value={email} onChange={this.handleChange} />
          </label>

          <label>
            Password
            <input type="password" name="password" value={password} onChange={this.handleChange} />
          </label>

          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  isAuthenticated: authSelectors.isAuthenticated(state),
});
export default connect(mapStateToProps, { onRegister: authOperations.register })(RegisterView);
