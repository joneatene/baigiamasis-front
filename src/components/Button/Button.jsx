import React from "react";
import PropTypes from "prop-types";
import * as S from "./Button.style";

const Button = ({ type, children }) => (
  <S.Button type={type}>{children}</S.Button>
);

Button.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["submit", "reset", "button"]),
};

Button.defaultProps = {
  type: "button",
};

export default Button;
