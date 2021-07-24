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
  fullname: PropTypes.string().max(255),
  photo: PropTypes.string(),
  post: PropTypes.string().max(255),
  timestamp: PropTypes.string(),
};

export default Card;
