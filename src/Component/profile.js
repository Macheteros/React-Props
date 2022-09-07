import React from "react";

export default function Profile (props) {
  return (
    <div>
      <h1>{props.fullName}</h1>
      <p>{props.bio}</p>
      <h3>{props.profession}</h3>
      <button style={button}
        onClick={() => props.handleName(`I go by the name ${props.fullName}`)} >
          ClickMe
      </button>
    </div>
  );
}

  const button = {
    height: 20,
    width: 80,
    color: "blue"
  }
