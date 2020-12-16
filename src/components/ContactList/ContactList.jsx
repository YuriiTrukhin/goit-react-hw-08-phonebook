import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./ContactList.module.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { connect } from "react-redux";
import contactsOperation from "../../redux/contacts/contactsOperation";
import selectors from "../../redux/selectors";

class ContactList extends Component {
  render() {
    return (
      <>
        <TransitionGroup component="ul" className={styles.list}>
          {this.props.list.map((el) => {
            return (
              <CSSTransition key={el.id} classNames={styles} timeout={250}>
                <li key={el.id} className={styles.listItem}>
                  {el.name} : {el.number}
                  <button className={styles.btn} type="button" onClick={() => this.props.toDelete(el.id)}>
                    Удалить
                  </button>
                </li>
              </CSSTransition>
            );
          })}
        </TransitionGroup>
      </>
    );
  }
}
ContactList.propTypes = {
  toDelete: PropTypes.func.isRequired,
  list: PropTypes.array.isRequired,
};
const mapStateToProps = (state) => ({
  list: selectors.getContactList(state),
});
const mapDispatchToProps = { toDelete: contactsOperation.removeContact };
export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
