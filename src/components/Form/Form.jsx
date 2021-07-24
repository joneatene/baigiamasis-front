import React from "react";
import PropTypes from "prop-types";
import * as Yup from "yup";
import * as S from "./Form.style";
import Button from "../Button/Button";

const Form = ({ type }) => {
  const fetchRegister = (fullname, email, password) => {
    fetch("https://baigiamasis-back-hvu2q.ondigitalocean.app/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ fullname, email, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data.error) {
          alert("user registered");
        } else {
          console.log(data);
          alert("Sorry, an error occured :( Please try again later");
        }
      });
  };

  const fetchLogin = (email, password) => {
    fetch("https://baigiamasis-back-hvu2q.ondigitalocean.app/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data.error) {
          alert("User logged in", data.token);
        } else {
          console.log(data);
          alert("Sorry, an error occured :( Please try again later");
        }
      });
  };
  const validation = (e) => {
    e.preventDefault();
    const email = e.target.elements.email.value.trim();
    const password = e.target.elements.password.value.trim();
    const fullname = e.target.elements.fullname.value.trim();

    if (email && password) {
      const schema = Yup.object().shape({
        email: Yup.string().email().max(255).min(5).required(),
        password: Yup.string().max(255).min(8).required(),
      });

      schema.isValid({ email, password }).then((data) => {
        data
          ? type === "register"
            ? fetchRegister(fullname, email, password)
            : fetchLogin(email, password)
          : alert("Bad email or password");
      });
    } else {
      alert("Please write in email and password");
    }
  };
  return (
    <div className="wrapper">
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
          {type}
        </Button>
      </form>
    </div>
  );
};

Form.propTypes = {
  type: PropTypes.oneOf(["register", "login"]),
};

export default Form;
