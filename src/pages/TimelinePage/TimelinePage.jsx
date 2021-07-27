import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../contexts/userContext";
import * as Yup from "yup";
import * as S from "./Timeline.style";
import Button from "../../components/Button/Button";
import Notification from "../../components/Notification/Notification";
import Card from "../../components/Card/Card";
import LoadingDots from "../Loading/Loading";

const TimelinePage = () => {
  const token = localStorage.getItem("token");
  const [content, setContent] = useState();
  const [newPost, setNewPost] = useState([]);
  const userContext = useContext(UserContext);

  //check if logged in
  const history = useHistory();
  if (!token) {
    history.push("/login");
  }

  useEffect(() => window.location.reload(), []);

  //useState for notification
  const [notification, setNotification] = useState();

  //post validation
  const validation = (e) => {
    e.preventDefault();
    const content = e.target.elements.content.value.trim();
    const user_id = userContext.user.id;
    const fullname = userContext.user.fullname;

    if (content) {
      const schema = Yup.object().shape({
        content: Yup.string().max(255).min(2).required(),
      });

      schema.isValid({ content }).then((data) => {
        if (data && user_id) {
          fetch(
            `https://baigiamasis-back-63jao.ondigitalocean.app/content/postcontent`,
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
              setNewPost((newPost) => [
                ...newPost,
                { content, user_id, fullname, timestamp: "just now" },
              ]);
            });
        }
      });
    } else {
      alert("Please write something");
    }
  };

  //get content
  useEffect(() => {
    fetch("https://baigiamasis-back-63jao.ondigitalocean.app/content/content", {
      headers: {
        authorization: `Beared ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setContent(data));
  }, [token]);

  if (userContext.user) {
    return (
      <div className="wrapper">
        <S.UserForm>
          <S.InfoBlock>
            {userContext.user && <S.Name>{userContext.user.fullname}</S.Name>}
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
        {newPost &&
          newPost
            .reverse()
            .map((post) => (
              <Card
                fullname={post.fullname}
                timestamp={post.timestamp}
                content={post.content}
              />
            ))}
        {content &&
          content.map((post) => (
            <Card
              key={post.post_id}
              deleteFunction={
                post.user_id === userContext.user.id ? true : false
              }
              id={post.post_id}
              fullname={post.fullname}
              timestamp={
                post.timestamp.slice(0, 10) + " " + post.timestamp.slice(11, 16)
              }
              content={post.content}
            />
          ))}
      </div>
    );
  }

  return <LoadingDots />;
};

export default TimelinePage;
