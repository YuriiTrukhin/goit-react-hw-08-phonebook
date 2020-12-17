import React from "react";
import { connect } from "react-redux";
import authSelectors from "../../redux/auth/authSelectors";
import authOperations from "../../redux/auth/authOperations";

const styles = {
  container: {
    width: "100%",
    textAlign: "right",
    display: "flex",
    jastifyContent: "flex-end",
    alignItems: "center",
  },
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
  button: {
    height: "35px",
    width: "100px",
    color: "white",
    backgroundColor: "blue",
    border: "1px solid grey",
    borderRadius: "5px",
  },
};

const UserMenu = ({ avatar, name, onLogout }) => (
  <div style={styles.container}>
    <img src={avatar} alt="" width="100px" style={styles.avatar} />
    <span style={styles.name}>Welcome, {name}</span>
    <button style={styles.button} type="button" onClick={onLogout}>
      Logout
    </button>
  </div>
);

const mapStateToProps = (state) => ({
  name: authSelectors.getUserName(state),
  avatar:
    "https://static.vecteezy.com/system/resources/previews/000/611/223/non_2x/vector-funny-dog-logo-design-concept-template.jpg",
});

export default connect(mapStateToProps, { onLogout: authOperations.logOut })(UserMenu);
