import { FC } from "react";
import styled from "styled-components";
import { media } from "../Screens";
import { theme } from "../theme";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 90px;
  background: ${theme.colors.bgWhite};
  font-weight: 400;
  font-size: 18px;
  line-height: 23px;
  color: ${theme.colors.textGreycolor};
  filter: drop-shadow(0px 5px 10px rgba(65, 14, 80, 0.102));
  gap: 10px;
  cursor: pointer;

  svg {
    font-size: 24px;
    color: ${theme.colors.primaryColor};
  }

  ${media.phone} {
    width: 250px;
    font-size: 16px;

    svg{
        font-size: 24px;
    }
  }
`;

interface RoleCardI {
  icon?: any;
  text?: string;
  handleClick?: any;
}
const RoleCardLayout: FC<RoleCardI> = ({ icon, text, handleClick }) => {
  return (
    <Container onClick={handleClick}>
      <span>{icon}</span>
      <span>{text}</span>
    </Container>
  );
};

export default RoleCardLayout;
