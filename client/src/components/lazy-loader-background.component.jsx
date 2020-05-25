import React, { Component } from "react";
import Loader from "react-loader-spinner";

class LazyBackground extends React.Component {
  state = {
    src: null,
    loaded: false,
  };

  timerOut = null;

  componentDidMount() {
    const { src, timeOut } = this.props;
    const imageLoader = new Image();
    imageLoader.onload = () => {
      this.setState({
        loaded: true,
        src,
      });
    };
    this.timeOut = setTimeout(() => {
      imageLoader.src = src;
    }, timeOut);
  }

  componentWillUnmount() {
    clearInterval(this.timeOut);
  }

  render() {
    const { src, loaded } = this.state;
    return loaded ? (
      <div
        {...this.props}
        style={{
          backgroundImage: `url(${src})`,
        }}
      >
        {this.props.children}
      </div>
    ) : (
      <Loader
        type="Puff"
        className="spinner-main"
        color="#61b60c"
        height={100}
        width={100}
        timeout={300000}
      />
    );
  }
}

export default LazyBackground