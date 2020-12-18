import React from "react";
import PropTypes from "prop-types";
// import styles from "./Filter.module.css";
import { connect } from "react-redux";
import contactsActions from "../../redux/contacts/contactsActions";
import selectors from "../../redux/selectors";
import { Container } from "react-bootstrap";

const Filter = ({ filterRender, filter }) => (
  <Container>
    <div className="form-group">
      <label>Find contacts by name</label>
      <input className="form-control" type="text" value={filter} onChange={(e) => filterRender(e.target.value)} />
    </div>
  </Container>
);

Filter.propTypes = {
  filterRender: PropTypes.func.isRequired,
  filter: PropTypes.string,
};
const mapStateToProps = (state, props) => ({
  filter: selectors.getFilter(state),
});
const mapDispatchToProps = { filterRender: contactsActions.filterRender };
export default connect(mapStateToProps, mapDispatchToProps)(Filter);
