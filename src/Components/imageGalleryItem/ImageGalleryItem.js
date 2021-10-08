import React from "react";
import PropTypes from "prop-types";
import { ImageGalleryItemStyle } from "./ImageGalleryStyleItem";

const ImageGalleryItem = ({ src, onPictureClick, largeImageURL }) => {
  return (
    <ImageGalleryItemStyle>
      <li
        className="ImageGalleryItem"
        onClick={() => onPictureClick(largeImageURL)}
      >
        <img src={src} alt="" className="ImageGalleryItem-image" />
      </li>
    </ImageGalleryItemStyle>
  );
};

ImageGalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
  onPictureClick: PropTypes.func.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
