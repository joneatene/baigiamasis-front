import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState();
  const token = localStorage.getItem("token");

  // useEffect(() => {
  //   axios
  //     .get("https://baigiamasis-back-hvu2q.ondigitalocean.app/auth/userinfo", {
  //       headers: {
  //         authorization: `Beared ${token}`,
  //       },
  //     })
  //     .then((res) => console.log(res));
  // }, [token]);

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};

export default UserProvider;
