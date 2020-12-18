import React from "react";
// import Loader from "react-loader-spinner";
export default class App extends React.Component {
  //other logic
  render() {
    return (
      <div class="d-flex justify-content-center">
        <div class="spinner-border" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>
    );
  }
}
