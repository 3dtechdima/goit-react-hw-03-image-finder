import React, { Component } from "react";
import PropTypes from "prop-types";
import ImageGalleryItem from "../imageGalleryItem/ImageGalleryItem";
import Modal from "../modal/Modal";
import Loader from "react-loader-spinner";
import api from "../../api/Api";
import { ImageGalleryStyle } from "./ImageGalleryStyle";

class ImageGallery extends Component {
  state = {
    pictures: [],
    modalShow: false,
    largeImageURL: "",
    loading: false,
    error: false,
  };

  componentDidUpdate(prevProps) {
    const { find, page } = this.props;

    if (prevProps !== this.props) {
      this.setState({ loading: true });
      api(find, page).then(({ data }) => {
        this.setState({ loading: false });
        this.setState({ error: false });

        if (data.hits.length === 0) {
          this.setState({ error: true });
        }

        if (prevProps.find === find) {
          this.setState((prevState) => ({
            pictures: [...prevState.pictures, ...data.hits],
          }));

          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: "smooth",
          });
        }

        if (prevProps.find !== find) {
          this.setState({ pictures: [...data.hits] });
        }
      });
    }
  }

  onPictureClick = (url) => {
    this.setState({ modalShow: true });
    this.setState({ largeImageURL: url });
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
    const { loading, pictures, modalShow, largeImageURL } = this.state;

    return (
      <ImageGalleryStyle>
        {loading ? (
          <Loader />
        ) : (
          <>
            {modalShow && (
              <Modal
                url={largeImageURL}
                onEsc={this.onEsc}
                onBackdropClick={this.onBackdropClick}
              />
            )}
            <ul className="ImageGallery">
              {this.state.error && <p>There are no images available</p>}

              {pictures.map(({ id, webformatURL, largeImageURL }) => (
                <ImageGalleryItem
                  key={id}
                  src={webformatURL}
                  onPictureClick={this.onPictureClick}
                  largeImageURL={largeImageURL}
                ></ImageGalleryItem>
              ))}
            </ul>
          </>
        )}
      </ImageGalleryStyle>
    );
  }
}

ImageGallery.propTypes = {
  page: PropTypes.number.isRequired,
  find: PropTypes.string,
};

export default ImageGallery;
