import React from "react";
import Profile from "./Component/profile";
import PropTypes from "prop-types";

export default function App() {
  const handleName = (fullName) => alert(fullName);
  return (
    <div>
      <Profile
        handleName={handleName}
        fullName="Martins Orubu"
        bio="I am a tall black Nigerian."
        profession="I am a fullstack developer." >

        <img src="/Image/photo_2022-05-18_12-34-48.jpg" alt="me"/>
      </Profile>
    </div>
  );
}

Profile.PropTypes = {
  handleName: PropTypes.func,
  fullName: PropTypes.string,
  bio: PropTypes.string,
  profession: PropTypes.string,
}
