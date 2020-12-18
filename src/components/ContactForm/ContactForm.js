import React, { Component } from "react";
import { connect } from "react-redux";

// import styles from "./ContactForm.module.css";
import newContact from "../../redux/contacts/contactsOperation";

import Alert from "../Alert/Alert";
import selectors from "../../redux/selectors";
import { Container } from "react-bootstrap";

class ContactForm extends Component {
  state = { name: "", number: "", contactAdded: false };

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.props.list);
    const rule = this.props.list.some((contact) => contact.name === this.state.name);
    if (rule) {
      this.setState({ contactAdded: true });
      setTimeout(() => this.setState({ contactAdded: false }), 2000);
      return;
    }
    this.props.addContact({ ...this.state });
    this.setState({
      name: "",
      number: "",
    });
  };

  render() {
    const { name, number, contactAdded } = this.state;
    return (
      <>
        <Alert contactAdded={contactAdded} />

        <Container>
          <form action="" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="name"> Name</label>
              <input
                required
                className="form-control"
                type="text"
                name="name"
                value={name}
                placeholder="name"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="number"> Number</label>
              <input
                required
                className="form-control"
                type="tel"
                name="number"
                value={number}
                placeholder="number"
                onChange={this.handleChange}
              />
            </div>
            <input className="btn btn-primary" type="submit" value="Add contuct" />
          </form>
        </Container>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  list: selectors.getForm(state),
});
const mapDispatchToProps = { addContact: newContact.addContact };
export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
