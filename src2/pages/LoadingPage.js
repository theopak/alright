import React, { PropTypes } from "react";

if (process.env.BROWSER) {
  require("../style/Loader.scss");
  require("../style/Animate.scss");
}

class LoadingPage extends React.Component {

  render() {
    return <div className="Loader Animate--slow Animate--withDelay Animate-fadeIn" />;
  }

}

export default LoadingPage;
