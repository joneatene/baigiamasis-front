import React from "react";
import PropTypes from "prop-types";
import * as S from "./Card.style";

const Card = ({ fullname, photo, post, timestamp }) => (
  <S.CardBlock>
    <S.InfoBlock>
      <S.CardImage src={photo} />
      <div>
        <S.Username>{fullname}</S.Username>
        <S.Timestamp>{timestamp}</S.Timestamp>
      </div>
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
