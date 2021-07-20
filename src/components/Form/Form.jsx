import React from "react";
import PropTypes from "prop-types";
import * as S from "./Form.style";
import Button from "../Button/Button";

const Form = ({ type }) => {
  return (
    <form>
      <S.Input
        type="email"
        name="email"
        minLength="5"
        maxLength="255"
        placeholder="Email"
        required
      />
      <S.Input
        type="password"
        name="password"
        minLength="8"
        maxLength="255"
        placeholder="Password"
        requires
      />
      <Button type="submit" color="primary">
        {type}
      </Button>
    </form>
  );
};

Form.propTypes = {
  type: PropTypes.oneOf(["register", "log in"]),
};

export default Form;
