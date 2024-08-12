import React from "react";
import Navbar from "./Navbar";
import Profile from "./Profile";
import Container from "./Container";

const Heading = () => {
  return (
    <Container>
      <div className="flex justify-between py-2 items-center">
        <Profile />
        <Navbar />
      </div>
    </Container>
  );
};

export default Heading;
