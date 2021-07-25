import React from "react";
import Notification from "./Notification";

export default {
  component: Notification,
  title: "Components/Notification",
};

export const NotificationStory = () => (
  <Notification type="danger">Hello this is notification</Notification>
);
