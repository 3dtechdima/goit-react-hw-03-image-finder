import React from "react";
import Loader from "react-loader-spinner";

class App extends React.Component {
  render() {
    return (
      <Loader
        type="ThreeDots"
        color="#1900ff"
        height={100}
        width={100}
        timeout={6000}
      />
    );
  }
}
export default App;
