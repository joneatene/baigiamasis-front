import React from "react";
import PropTypes from "prop-types";
import * as S from "./Card.style";

const Card = ({ fullname, content, timestamp, id, deleteFunction }) => {
  return (
    <S.CardBlock>
      <S.InfoBlock>
        <S.Username>{fullname}</S.Username>
        <S.Timestamp>{timestamp}</S.Timestamp>
      </S.InfoBlock>
      {content}
      {deleteFunction === true && <S.DeleteButton>x</S.DeleteButton>}
    </S.CardBlock>
  );
};

Card.propTypes = {
  fullname: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
  deleteFunction: PropTypes.bool,
};

export default Card;
