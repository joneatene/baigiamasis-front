import React, { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../contexts/userContext";
import * as S from "./Profile.style";
import Card from "../../components/Card/Card";

const ProfilePage = () => {
  const history = useHistory();
  if (!localStorage.getItem("token")) {
    history.push("/login");
  }
  const userContext = useContext(UserContext);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (userContext.user) {
      fetch(
        `https://baigiamasis-back-63jao.ondigitalocean.app/content/content/${userContext.user.id}`,
        {
          headers: {
            authorization: `Beared ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          setPosts(data);
        });
    }
  }, [userContext]);

  if (userContext.user && posts) {
    return (
      <div className="wrapper">
        <S.InfoBlock>
          <S.Name>{userContext.user.fullname}</S.Name>
        </S.InfoBlock>
        <S.Title>These are your posts</S.Title>
        {posts &&
          posts.length !== 0 &&
          posts.map((post) => (
            <Card
              key={post.post_id}
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

  return <h1>Loading...</h1>;
};

export default ProfilePage;
