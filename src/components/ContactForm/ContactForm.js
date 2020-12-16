import React, { Component } from "react";
import { connect } from "react-redux";

import styles from "./ContactForm.module.css";
import newContact from "../../redux/contacts/contactsOperation";

import Alert from "../Alert/Alert";
import selectors from "../../redux/selectors";

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

        <div>
          <form className={styles.form} action="" onSubmit={this.handleSubmit}>
            <label className={styles.label} htmlFor="name">
              {" "}
              Name
              <input
                required
                className={styles.input}
                type="text"
                name="name"
                value={name}
                placeholder="name"
                onChange={this.handleChange}
              />
            </label>
            <label className={styles.label} htmlFor="number">
              {" "}
              Number
              <input
                required
                className={styles.input}
                type="tel"
                name="number"
                value={number}
                placeholder="number"
                onChange={this.handleChange}
              />
            </label>
            <input className={styles.inputBtn} type="submit" value="Add contuct" />
          </form>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  list: selectors.getForm(state),
});
const mapDispatchToProps = { addContact: newContact.addContact };
export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
