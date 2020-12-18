import React, { Component } from "react";
import { connect } from "react-redux";
import routes from "../routes";
import { NavLink } from "react-router-dom";
import authOperations from "../redux/auth/authOperations";
import authSelectors from "../redux/auth/authSelectors";
import { Navbar, Container, Nav } from "react-bootstrap";

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
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand>
              <img src="#" alt="" />
              Register page
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
              <label>Name</label>
              <input
                className="form-control"
                required
                type="text"
                name="name"
                value={name}
                onChange={this.handleChange}
              />
            </div>
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
              Register
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
export default connect(mapStateToProps, { onRegister: authOperations.register })(RegisterView);
