import React, { FC } from "react";
import styled from "styled-components";
import { media } from "../Screens";
import { theme } from "../theme";

const ChurchCardContainr = styled.div`
  display: flex;
  flex-direction: column;
  width: 157px;
  height: 178px;
  filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.051));
  background: ${theme.colors.bgWhite};
  padding: 5px;
  cursor: pointer;

  ${media.phone} {
    width: 40%;
    height: 100px;
  }
`;

const ChurchTitle = styled.div`
  padding: 0 10px;
  font-style: normal;
  margin-top: 10px;
  font-weight: 400;
  font-size: 12px;
  color: ${theme.colors.secondaryColor};
`;
const ChurchLocation = styled.div`
  padding: 0 10px;
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  color: ${theme.colors.secondaryColor};
`;

const ChurchImage = styled.img`
  width: 100%;
  height: 70%;
`;

interface ChurchCardI {
  churchLogo?: string;
  churchTitle?: string;
  churchLocation?: string;
  handleClick?: any;
}
const ChurchCard: FC<ChurchCardI> = ({
  churchLogo,
  churchTitle,
  churchLocation,
  handleClick,
}) => {
  return (
    <ChurchCardContainr onClick={handleClick}>
      <ChurchImage src={churchLogo} alt="church-logo" />
      <ChurchTitle>{churchTitle}</ChurchTitle>
      <ChurchLocation>{churchLocation}</ChurchLocation>
    </ChurchCardContainr>
  );
};

export default ChurchCard;
