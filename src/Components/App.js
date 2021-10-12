import React, { Component } from "react";
import api from "../api/Api";
import { AppStyle } from "./AppStules";
import Button from "./button/Button";
import ImageGallery from "./imageGallery/ImageGallery";
import Searchbar from "./searchbar/Searchbar";

class App extends Component {
  state = {
    pictures: [],
    loading: false,
    page: 1,
    find: "",
  };
  onSearch = (search) => {
    this.setState({ find: search, pictures: [], page: 1 });
  };

  getImages = () => {
    this.setState({ loading: true });
    return api(this.state.find, this.state.page)
      .then((resp) => {
        this.setState((prev) => ({
          pictures: [...prev.pictures, ...resp],
          page: prev.page + 1,
        }));
      })
      .catch((error) => console.log(error))
      .finally(() => this.setState({ loading: false }));
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.find !== this.state.find) {
      return this.getImages();
    }
    if (this.state.page >= 2) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }
  }

  // er = () => {
  //   if (this.setState.pictures.length === 0) {
  //     return "Babla nema";
  //   }
  // };

  onSubmit = (e) => {
    e.preventDefault();
    const findImg = e.target.find.value;
    this.setState({ find: findImg });
  };

  onLoadMoreClick = () => {
    this.getImages();
  };

  render() {
    const { page, find, loading, pictures } = this.state;
    return (
      <AppStyle>
        <Searchbar onSearch={this.onSearch} />
        <ImageGallery
          page={page}
          find={find}
          loading={loading}
          pictures={pictures}
        />
        {pictures.length ? (
          <Button onLoadMoreClick={this.onLoadMoreClick} />
        ) : (
          "Enter your request"
        )}
      </AppStyle>
    );
  }
}

export default App;
