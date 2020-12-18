import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import routes from "../routes";
import { connect } from "react-redux";
import authSelectors from "../redux/auth/authSelectors";
import { Navbar, Container, Nav } from "react-bootstrap";

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
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand>
              <img src="#" alt="" />
              Home page
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse>
              <Nav className="mr-auto">
                <Nav.Link>
                  <NavLink variant="outline-primary" to={routes.LoginView}>
                    Login
                  </NavLink>
                </Nav.Link>
                <Nav.Link>
                  <NavLink to={routes.RegisterView}>Registration</NavLink>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  isAuthenticated: authSelectors.isAuthenticated(state),
});
export default connect(mapStateToProps, null)(HomeView);
