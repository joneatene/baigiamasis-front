import React from "react";
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

export default Card;
