import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./ContactList.module.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { connect } from "react-redux";
import contactsOperation from "../../redux/contacts/contactsOperation";
import selectors from "../../redux/selectors";
import { Container } from "react-bootstrap";

class ContactList extends Component {
  render() {
    return (
      <>
        <Container>
          <TransitionGroup component="ul" className="navbar-nav mr-auto">
            {this.props.list.map((el) => {
              return (
                <CSSTransition key={el.id} classNames={styles} timeout={250}>
                  <li key={el.id} className="nav-item active m-auto">
                    <div className="form-group">
                      <span> {el.name}</span> : <span className="mr-3">{el.number}</span>
                      <button className="btn btn-primary " type="button" onClick={() => this.props.toDelete(el.id)}>
                        Удалить
                      </button>
                    </div>
                  </li>
                </CSSTransition>
              );
            })}
          </TransitionGroup>
        </Container>
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
