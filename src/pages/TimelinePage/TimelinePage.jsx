import React, { useState } from "react";
import { useHistory } from "react-router-dom";
//import { UserContext } from "../../contexts/userContext";
import * as Yup from "yup";
import * as S from "./Timeline.style";
import Button from "../../components/Button/Button";
import Notification from "../../components/Notification/Notification";

const TimelinePage = () => {
  //check if logged in
  const history = useHistory();
  if (!localStorage.getItem("token")) {
    history.push("/login");
  }

  //useState for notification
  const [notification, setNotification] = useState();

  //post validation
  const validation = (e) => {
    e.preventDefault();
    const content = e.target.elements.content.value.trim();
    if (content) {
      const schema = Yup.object().shape({
        content: Yup.string().max(255).min(2).required(),
      });
      schema.isValid({ content }).then((data) => {
        if (data) {
          //fetch
        } else {
          setNotification({ type: "danger", text: "Bad post :(" });
        }
      });
    } else {
      alert("Please write something");
    }
  };

  return (
    <div className="wrapper">
      <S.UserForm>
        {notification && (
          <Notification type={notification.type}>
            {notification.text}
          </Notification>
        )}
        <S.InfoBlock>
          <S.Name>Jone Atene Kalmaite</S.Name>
        </S.InfoBlock>
        <form onSubmit={validation}>
          <S.Input
            name="content"
            minLength="2"
            maxLength="255"
            placeholder={`What's on your mind?`}
            required
          />
          <Button type="submit" color="primary">
            Post
          </Button>
        </form>
      </S.UserForm>
    </div>
  );
};

export default TimelinePage;
