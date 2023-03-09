import React, { FC } from "react";
import styled from "styled-components";
import { media } from "../Screens";
import { theme } from "./../theme";

interface IContainer {
  bg?: string;
}

const Container = styled.div<IContainer>`
  height: 250px;
  width: 30%;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 15px;
  height: auto;
  background-color: ${(props) => props.bg};

  ${media.phone} {
    width: 100%;
    gap: 0;
  }
`;

const Icon = styled.div`
  width: 66px;

  ${media.phone} {
    width: 50px;
  }
`;
const BigText = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 77px;
  line-height: 97px;
  color: ${theme.colors.bgWhite};
  ${media.phone} {
    font-size: 50px;
  }
`;
const Desc = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 30px;
  color: ${theme.colors.bgWhite};

  ${media.phone} {
    font-size: 16px;
  }
`;

interface IColoredCard {
  icon: any;
  bigText: string | number;
  desc: string;
  bg?: string;
}
const ColoredCard: FC<IColoredCard> = ({ icon, bigText, desc, bg }) => {
  return (
    <Container bg={bg}>
      <Icon>{icon}</Icon>
      <BigText>{bigText}</BigText>
      <Desc>{desc}</Desc>
    </Container>
  );
};

export default ColoredCard;
