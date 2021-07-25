import React from "react";
import PropTypes from "prop-types";
import * as S from "./Card.style";

const Card = ({ fullname, photo, post, timestamp }) => (
  <S.CardBlock>
    <S.InfoBlock>
      <S.Username>Jone Atene Kalmaite</S.Username>
      <S.Timestamp>2021-06-05 12.45</S.Timestamp>
    </S.InfoBlock>
    {post}
  </S.CardBlock>
);

Card.propTypes = {
  fullname: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  post: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
};

export default Card;
