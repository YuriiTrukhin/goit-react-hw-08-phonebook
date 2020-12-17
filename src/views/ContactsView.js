import React, { Component } from "react";
import ContactForm from "../components/ContactForm/ContactForm";
import ContactList from "../components/ContactList/ContactList";
import Filter from "../components/Filter/Filter";
import { CSSTransition } from "react-transition-group";
import styles from "../App.module.css";
import { connect } from "react-redux";
import authSelectors from "../redux/auth/authSelectors";
import contactsOperation from "../redux/contacts/contactsOperation";



class ContactsView extends Component {
  componentDidMount() {
    if (!this.props.isAuthenticated) {
      this.props.history.replace("/");
      return;
    }
    this.props.onFetchContacts();
  }
  componentDidUpdate() {
    if (!this.props.isAuthenticated) {
      this.props.history.replace("/");
    }
  }
  render() {
    return (
      <div>
        <CSSTransition in={true} appear={true} timeout={5000} classNames={styles}>
          <h1 className={styles.title}>Phonebook</h1>
        </CSSTransition>
        <ContactForm />
        <h2 className={styles.title}>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  isAuthenticated: authSelectors.isAuthenticated(state),
});
const mapDispatchToProps = {
  onFetchContacts: contactsOperation.fetchContacts,
};
export default connect(mapStateToProps, mapDispatchToProps)(ContactsView);
