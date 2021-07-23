import React from "react";
import Routes from "./Routes";
import UserProvider from "./contexts/userContext";

const App = () => (
  <UserProvider>
    <Routes />
  </UserProvider>
);

export default App;
