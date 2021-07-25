import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../../contexts/userContext";
import * as S from "./Profile.style";

import Card from "../../components/Card/Card";

const ProfilePage = () => {
  const [user, setUser] = useState();
  const userContext = useContext(UserContext);

  useEffect(() => setUser(userContext.user), [userContext]);
  if (user) {
    return (
      <div className="wrapper">
        <h1>{user}</h1>
        {/* <S.InfoBlock>
          <S.Photo src={user.photo} />
          <div>
            <S.Name>{user.fullname}</S.Name>
            <p>{user.about}</p>
          </div>
        </S.InfoBlock>
        <section>
          {user.posts &&
            user.posts.map((post) => (
              <Card
                fullname={user.fullname}
                photo={user.photo}
                post={post.post}
                timestamp={post.timestamp}
                key={post.id}
              />
            ))}
        </section> */}
      </div>
    );
  }

  return <h1>Loading...</h1>;
};

export default ProfilePage;
