import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [change, setChange] = useState();
  const token = localStorage.getItem("token");
  const history = useHistory();

  history.listen((loc) => setChange(loc));

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
  }, [token, change]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
