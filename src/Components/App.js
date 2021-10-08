import React, { Component } from "react";
import { AppStyle } from "./AppStules";
import Button from "./button/Button";
import ImageGallery from "./imageGallery/ImageGallery";
import Searchbar from "./searchbar/Searchbar";

class App extends Component {
  state = {
    pictures: null,
    loading: false,
    page: 1,
    find: null,
    enabled: false,
  };

  onSubmit = (e) => {
    e.preventDefault();
    const findImg = e.target.find.value;
    console.log(findImg);
    if (!findImg || findImg === this.state.find) {
      return;
    }
    this.setState({ enabled: true });
    this.setState({ find: findImg });
    this.setState({ page: 1 });
  };

  onLoadMoreClick = () => {
    this.setState((prevState) => ({ page: (prevState.page += 1) }));
  };

  render() {
    const { page, find, enabled } = this.state;
    return (
      <AppStyle>
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery page={page} find={find} />
        {enabled && <Button onLoadMoreClick={this.onLoadMoreClick} />}
      </AppStyle>
    );
  }
}

export default App;
