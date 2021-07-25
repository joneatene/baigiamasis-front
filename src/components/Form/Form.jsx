import React, { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import * as Yup from "yup";
import * as S from "./Form.style";
import Button from "../Button/Button";
import Notification from "../Notification/Notification";

const Form = ({ type }) => {
  const [notification, setNotification] = useState();
  //for registering user
  const fetchRegister = (fullname, email, password) => {
    axios
      .post("https://baigiamasis-back-hvu2q.ondigitalocean.app/auth/register", {
        fullname,
        email,
        password,
      })
      .then((res) => {
        if (res.data.status) {
          setNotification({ type: "success", text: res.data.status });
        }
      })
      .catch((err) =>
        setNotification({ type: "danger", text: err.response.data.error })
      );
  };
  //for logging in user
  const fetchLogin = (email, password) => {
    axios
      .post("https://baigiamasis-back-hvu2q.ondigitalocean.app/auth/login", {
        email,
        password,
      })
      .then((res) => {
        if (res.data.status) {
          setNotification({ type: "success", text: res.data.status });
        }
      })
      .catch((err) =>
        setNotification({ type: "danger", text: err.response.data.error })
      );
  };
  //register and login form validation
  const validation = (e) => {
    e.preventDefault();
    const email = e.target.elements.email.value.trim();
    const password = e.target.elements.password.value.trim();
    let fullname = e.target.elements.fullname.value.trim();
    fullname = fullname.split(" ");
    fullname = fullname
      .map((word) => {
        return word[0].toUpperCase() + word.substring(1).toLowerCase();
      })
      .join(" ");

    if (email && password) {
      const schema = Yup.object().shape({
        email: Yup.string().email().toLowerCase().max(255).min(5).required(),
        password: Yup.string().max(255).min(8).required(),
      });

      schema.isValid({ email, password }).then((data) => {
        if (data) {
          type === "register"
            ? fetchRegister(fullname, email, password)
            : fetchLogin(email, password);
        } else {
          setNotification({ type: "danger", text: "Bad email or password" });
        }
      });
    } else {
      setNotification({ type: "danger", text: "Bad email or password" });
    }
  };
  return (
    <div className="wrapper">
      {notification && (
        <Notification type={notification.type}>
          {notification.text}
        </Notification>
      )}
      <form onSubmit={validation}>
        {type === "register" && (
          <S.Input
            type="text"
            name="fullname"
            minLength="2"
            maxLength="255"
            placeholder="Your full name"
            required
          />
        )}
        <S.Input
          type="email"
          name="email"
          minLength="5"
          maxLength="255"
          placeholder="Email"
          required
        />
        <S.Input
          type="password"
          name="password"
          minLength="8"
          maxLength="255"
          placeholder="Password"
          requires
        />
        <Button type="submit" color="primary">
          {type === "register" ? "register" : "log in"}
        </Button>
      </form>
    </div>
  );
};

Form.propTypes = {
  type: PropTypes.oneOf(["register", "login"]),
};

export default Form;
