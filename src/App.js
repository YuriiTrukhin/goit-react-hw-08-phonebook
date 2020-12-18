// import ContactForm from "../src/components/ContactForm/ContactForm";
// import ContactList from "../src/components/ContactList/ContactList";
// import Filter from "../src/components/Filter/Filter";
// import { CSSTransition } from "react-transition-group";
import React, { lazy, Suspense, Component } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
// import styles from "./App.module.css";
import { connect } from "react-redux";
import routes from "./routes";
import authSelectors from "./redux/auth/authSelectors";
import UserMenu from "./components/UserMenu/UserMenu";
import authOperations from "./redux/auth/authOperations";
import Loading from "./components/Loading/Loading";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

// import React, { Component } from "react";

const AsyncHomeView = lazy(() => import("./views/HomeView"));
const AsyncLoginView = lazy(() => import("./views/LoginView"));
const AsyncRegisterView = lazy(() => import("./views/RegisterView"));
const AsyncContactsView = lazy(() => import("./views/ContactsView"));

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }
  render() {
    return (
      <>
        <BrowserRouter>
          <Suspense
            fallback={
              <Loading />
              // {this.props.isLoadingContacts && <h1>LOADING STUFF ...</h1>}</div>
            }
          >
            {this.props.isAuthenticated && <UserMenu />}
            <Switch>
              <Route exact path={routes.HomeView} component={AsyncHomeView} />
              <Route exact path={routes.LoginView} component={AsyncLoginView} />
              <Route path={routes.RegisterView} component={AsyncRegisterView} />
              <Route path={routes.ContactsView} component={AsyncContactsView} />
              <Redirect to="/" />
            </Switch>
          </Suspense>
        </BrowserRouter>
      </>
    );
  }
}
// const mapStateToProps = (state) => ({
//   isLoadingContacts: selectors.getLoading(state),
// });
// const mapDispatchToProps = {
//   onFetchComponents: contactsOperation.fetchContacts,
// };
// export default connect(mapStateToProps, mapDispatchToProps)(App);
// export default App;

const mapStateToProps = (state) => ({
  isAuthenticated: authSelectors.isAuthenticated(state),
});

export default connect(mapStateToProps, {
  onGetCurrentUser: authOperations.getCurrentUser,
})(App);
