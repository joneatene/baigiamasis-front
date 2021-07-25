import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
//import { UserContext } from "../../contexts/userContext";
import * as Yup from "yup";
import * as S from "./Timeline.style";
import Button from "../../components/Button/Button";
import Notification from "../../components/Notification/Notification";
import Card from "../../components/Card/Card";

const TimelinePage = () => {
  const token = localStorage.getItem("token");
  const [content, setContent] = useState();
  console.log(content);
  //check if logged in
  const history = useHistory();
  if (!token) {
    history.push("/login");
  }

  //useState for notification
  const [notification, setNotification] = useState();

  //post validation
  const validation = (e) => {
    e.preventDefault();
    const content = e.target.elements.content.value.trim();
    const user_id = 8;

    if (content) {
      const schema = Yup.object().shape({
        content: Yup.string().max(255).min(2).required(),
      });

      schema.isValid({ content }).then((data) => {
        if (data) {
          fetch(
            "https://baigiamasis-back-hvu2q.ondigitalocean.app/content/postcontent",
            {
              method: "POST",
              headers: {
                authorization: `Beared ${token}`,
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ content, user_id }),
            }
          )
            .then((res) => res.json())
            .then((data) => {
              setNotification({ type: "success", text: data.status });
              setTimeout(() => document.location.reload(), 2000);
            });
        }
      });
    } else {
      alert("Please write something");
    }
  };

  //get content
  useEffect(() => {
    fetch("https://baigiamasis-back-hvu2q.ondigitalocean.app/content/content", {
      headers: {
        authorization: `Beared ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setContent(data));
  }, [token]);

  return (
    <div className="wrapper">
      <S.UserForm>
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
          {notification && (
            <Notification type={notification.type}>
              {notification.text}
            </Notification>
          )}
        </form>
      </S.UserForm>
      {content &&
        content.map((post) => (
          <Card
            fullname={post.fullname}
            timestamp={post.timestamp}
            content={post.content}
          />
        ))}
    </div>
  );
};

export default TimelinePage;
