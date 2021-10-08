import React, { Component } from "react";
import PropTypes from "prop-types";
class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.props.onEsc);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.props.onEsc);
  }

  render() {
    return (
      <div className="Overlay" onClick={this.props.onBackdropClick}>
        <div className="Modal">
          <img src={this.props.url} alt="" />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  url: PropTypes.string.isRequired,
  onEsc: PropTypes.func.isRequired,
  onBackdropClick: PropTypes.func.isRequired,
};

export default Modal;
