import React from "react";
import { Container, WelcomeText, CardContainer } from "./styles";
import ColoredCard from "./../../../../Layouts/ColoredCard";


const index = () => {
  return (
    <Container>
      <WelcomeText>Welcome to Global Admin Dashboard</WelcomeText>
      <CardContainer>
        <ColoredCard
          icon={
            <img
              src="/assets/images/png/verified.png"
              alt="verified churches"
            />
          }
          bigText="456"
          desc="Verified Churches"
          bg="#B603C9"
        />
        <ColoredCard
          icon={<img src="assets/images/png/members.png" alt="members" />}
          bigText="773"
          desc="Registered Church Members"
          bg="#F6B958"
        />
        <ColoredCard
          icon={
            <img
              src="assets/images/png/unverified.png"
              alt="unverified churches"
            />
          }
          bigText="8576"
          desc="Unverified Churches"
          bg="#151C4D"
        />
      </CardContainer>
    </Container>
  );
};

export default index;
