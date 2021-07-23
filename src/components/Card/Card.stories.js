import React from "react";
import Card from "./Card";

export default {
  component: Card,
  title: "Components/Card",
};

export const CardStory = () => (
  <Card
    fullname="Jone Kalmaite"
    photo="https://images.pexels.com/photos/2552130/pexels-photo-2552130.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    post="Helllo this is a post"
    timestamp="2021-05-05 12.54"
  />
);
