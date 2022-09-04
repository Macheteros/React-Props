import React from "react";
import Address from "./Components/Profile/Address";
import Fullname from "./Components/Profile/FullName";
import ProfilePhoto from "./Components/Profile/ProfilePhoto";
import './App.css';

export default function App() {
  return (
    <div>
      
      <Fullname />
      <Address />
      <ProfilePhoto />
    </div>
  );
}
