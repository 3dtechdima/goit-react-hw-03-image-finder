import React, { Component } from "react";
import PropTypes from "prop-types";
import ImageGalleryItem from "../imageGalleryItem/ImageGalleryItem";
import Loader from "react-loader-spinner";
import { ImageGalleryStyle } from "./ImageGalleryStyle";

class ImageGallery extends Component {
  render() {
    const { loading, pictures, modalShow } = this.props;

    return (
      <ImageGalleryStyle>
        <>
          <ul className="ImageGallery">
            {pictures.length
              ? pictures.map(({ id, webformatURL, largeImageURL }) => (
                  <ImageGalleryItem
                    key={id}
                    src={webformatURL}
                    modalShow={modalShow}
                    largeImageURL={largeImageURL}
                  />
                ))
              : null}
            {loading && <Loader />}
          </ul>
        </>
      </ImageGalleryStyle>
    );
  }
}

ImageGallery.propTypes = {
  page: PropTypes.number.isRequired,
  find: PropTypes.string,
};

export default ImageGallery;
