import React from "react";
import PropTypes from "prop-types";
import { ButtonStyle } from "./ButtonStyle";

const Button = ({ onLoadMoreClick }) => {
  return (
    <ButtonStyle>
      <button className="Button" onClick={onLoadMoreClick}>
        Load more
      </button>
    </ButtonStyle>
  );
};

Button.propTypes = {
  onLoadMoreClick: PropTypes.func.isRequired,
};

export default Button;
