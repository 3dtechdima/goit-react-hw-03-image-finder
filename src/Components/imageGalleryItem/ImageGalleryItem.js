import React, { Component } from "react";
import PropTypes from "prop-types";
import { ImageGalleryItemStyle } from "./ImageGalleryStyleItem";
import Modal from "../modal/Modal";

class ImageGalleryItem extends Component {
  state = {
    modalShow: false,
  };

  onPictureClick = () => {
    this.setState({ modalShow: true });
  };

  onEsc = (e) => {
    if (e.code === "Escape") {
      this.setState({ modalShow: false });
    }
  };

  onBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      this.setState({ modalShow: false });
    }
  };
  render() {
    const { src, largeImageURL } = this.props;

    return (
      <ImageGalleryItemStyle>
        <li
          className="ImageGalleryItem"
          onClick={() => this.onPictureClick(largeImageURL)}
        >
          <img src={src} alt="$" className="ImageGalleryItem-image" />
        </li>
        {this.state.modalShow ? (
          <Modal
            url={largeImageURL}
            onEsc={this.onEsc}
            onBackdropClick={this.onBackdropClick}
          />
        ) : (
          ""
        )}
      </ImageGalleryItemStyle>
    );
  }
}

ImageGalleryItem.propTypes = {
  src: PropTypes.string,
  url: PropTypes.string,
  onClick: PropTypes.func,
  onEsc: PropTypes.func,
  onBackdropClick: PropTypes.func,
  largeImageURL: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
