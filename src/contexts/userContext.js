import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      axios
        .get(
          "https://baigiamasis-back-63jao.ondigitalocean.app/content/userinfo",
          {
            headers: {
              authorization: `Beared ${token}`,
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => setUser(res.data));
    }
  }, [token]);

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};

export default UserProvider;
