import React from "react";
import PropTypes from "prop-types";
import * as S from "./Card.style";

const Card = ({ fullname, photo, content, timestamp }) => (
  <S.CardBlock>
    <S.InfoBlock>
      <S.Username>{fullname}</S.Username>
      <S.Timestamp>
        {`${timestamp.slice(0, 10)} ${timestamp.slice(11, 16)}`}
      </S.Timestamp>
    </S.InfoBlock>
    {content}
  </S.CardBlock>
);

Card.propTypes = {
  fullname: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  post: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
};

export default Card;
