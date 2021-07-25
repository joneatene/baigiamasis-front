import React from "react";
import PropTypes from "prop-types";
import * as S from "./Notification.style";

const Notification = ({ type, children }) => (
  <S.NotificationBlock type={type}>{children}</S.NotificationBlock>
);

Notification.proptTypes = {
  type: PropTypes.oneOf(["success", "danger"]),
  children: PropTypes.string.required,
};

Notification.defaultProps = {
  type: "success",
};

export default Notification;
