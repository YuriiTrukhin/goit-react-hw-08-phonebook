import React from "react";
// import PropTypes from "prop-types";
import { CSSTransition } from "react-transition-group";
import styles from "../Alert/Alert.module.css";

const Alert = ({ contactAdded }) => {
  return (
    <CSSTransition in={contactAdded} timeout={250} classNames={styles} unmountOnExit>
      <div className={styles.alertBox}>
        <p>Contact already declared</p>
      </div>
    </CSSTransition>
  );
};
export default Alert;
