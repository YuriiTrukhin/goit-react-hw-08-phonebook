import React from "react";
import { connect } from "react-redux";
import authSelectors from "../../redux/auth/authSelectors";
import authOperations from "../../redux/auth/authOperations";
import { Navbar, Container, Nav, Button } from "react-bootstrap";

const UserMenu = ({ avatar, name, onLogout }) => (
  <div>
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand>
          <img src={avatar} alt="" width="100px" />
          <span> Welcome, {name}</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="ml-auto">
            <Nav.Link>
              <Button className="btn btn-outline-success " variant="primary" type="button" onClick={onLogout}>
                Logout
              </Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </div>
);

const mapStateToProps = (state) => ({
  name: authSelectors.getUserName(state),
  avatar:
    "https://static.vecteezy.com/system/resources/previews/000/611/223/non_2x/vector-funny-dog-logo-design-concept-template.jpg",
});

export default connect(mapStateToProps, { onLogout: authOperations.logOut })(UserMenu);
