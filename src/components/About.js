import React from "react";
import User from "./User";
import UserClass from "./UserClass";

function About() {
  return (
    <div>
      <h4>About</h4>
      <h4>This is the about page of Namaste React</h4>

      <UserClass name={"Ashutosh26121999"} />
      <UserClass name={"mojombo"} />
    </div>
  );
}

export default About;
