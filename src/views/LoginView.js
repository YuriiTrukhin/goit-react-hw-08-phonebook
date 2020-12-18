import React, { Component } from "react";
import routes from "../routes";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import authOperations from "../redux/auth/authOperations";
import authSelectors from "../redux/auth/authSelectors";
import { Navbar, Container, Nav } from "react-bootstrap";

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
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand>
              <img src="#" alt="" />
              Login page
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse>
              <Nav className="mr-auto">
                <Nav.Link>
                  <NavLink variant="outline-primary" to={routes.HomeView}>
                    {" "}
                    Back to home
                  </NavLink>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Container>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label>Email</label>
              <input
                className="form-control"
                required
                type="email"
                name="email"
                value={email}
                onChange={this.handleChange}
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                className="form-control"
                required
                type="password"
                name="password"
                value={password}
                onChange={this.handleChange}
              />
            </div>
            <button className="btn btn-primary" type="submit">
              Login
            </button>
          </form>
        </Container>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  isAuthenticated: authSelectors.isAuthenticated(state),
});
export default connect(mapStateToProps, { onLogin: authOperations.logIn })(LoginView);
