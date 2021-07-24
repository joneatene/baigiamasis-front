import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "../../contexts/userContext";
import * as S from "./Timeline.style";
import Button from "../../components/Button/Button";

const TimelinePage = () => {
  const [user, setUser] = useState();
  const userContext = useContext(UserContext);
  useEffect(() => setUser(userContext), [userContext]);

  if (user) {
    return (
      <div className="wrapper">
        <S.UserForm>
          <S.InfoBlock>
            <S.Photo src={user.photo} />
            <S.Name>{user.fullname}</S.Name>
          </S.InfoBlock>
          <form>
            <S.Input
              name="post"
              minLength="2"
              maxLength="255"
              placeholder={`What's on your mind ${
                user.fullname.split(" ")[0]
              }?`}
              required
            />
            <Button
              type="submit"
              color="primary"
            >
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
