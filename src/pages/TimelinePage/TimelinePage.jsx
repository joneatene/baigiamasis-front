import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "../../contexts/userContext";
import * as Yup from "yup";
import * as S from "./Timeline.style";
import Button from "../../components/Button/Button";

const TimelinePage = () => {
  const [user, setUser] = useState();
  const userContext = useContext(UserContext);
  useEffect(() => setUser(userContext), [userContext]);

  if (user) {
    const validation = (e) => {
      e.preventDefault();
      const content = e.target.elements.content.value.trim();

      if (content) {
        const schema = Yup.object().shape({
          content: Yup.string().max(255).min(2).required(),
        });

        schema.isValid({ content }).then((data) => {
          data ? alert("fetch") : alert("Bad post :(");
        });
      } else {
        alert("Please write something");
      }
    };
    return (
      <div className="wrapper">
        <S.UserForm>
          <S.InfoBlock>
            <S.Photo src={user.photo} />
            <S.Name>{user.fullname}</S.Name>
          </S.InfoBlock>
          <form onSubmit={validation}>
            <S.Input
              name="content"
              minLength="2"
              maxLength="255"
              placeholder={`What's on your mind ${
                user.fullname.split(" ")[0]
              }?`}
              required
            />
            <Button type="submit" color="primary">
              Post
            </Button>
          </form>
        </S.UserForm>
      </div>
    );
  }

  return <h1>Loading...</h1>;
};

export default TimelinePage;
