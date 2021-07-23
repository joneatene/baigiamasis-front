import React, { createContext, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});

  useState(() => {
    setUser({
      name: "Jone",
      photo:
        "https://images.pexels.com/photos/2552130/pexels-photo-2552130.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      about: "Hi, I'm a Front-End student at CodeAcademy",
      posts: [
        {
          id: 1,
          post: "Hello it is my first post",
          timestamp: "2021-05-06 20.10",
        },
      ],
    });
  }, []);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export default UserProvider;
