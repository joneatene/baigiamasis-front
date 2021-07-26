import React from "react";
import PropTypes from "prop-types";
import * as S from "./Card.style";

const Card = ({ fullname, content, timestamp, id, deleteFunction }) => {
  console.log(id);
  const deleteCard = () => {
    if (id) {
      const post_id = id;
      fetch(
        "https://baigiamasis-back-63jao.ondigitalocean.app/content/delete",
        {
          method: "POST",
          headers: {
            authorization: `Beared ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ post_id }),
        }
      )
        .then((res) => res.json())
        .then((data) => console.log(data));
    } else {
      console.log("hello no id");
    }
  };
  return (
    <S.CardBlock>
      <S.InfoBlock>
        <S.Username>{fullname}</S.Username>
        <S.Timestamp>{timestamp}</S.Timestamp>
      </S.InfoBlock>
      {content}
      {deleteFunction === true && (
        <S.DeleteButton onClick={deleteCard}>x</S.DeleteButton>
      )}
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
