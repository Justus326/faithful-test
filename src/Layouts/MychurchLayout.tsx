import { FC } from "react";
import styled from "styled-components";
import { media } from "../Screens";
import { theme } from "../theme";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 350px;
  height: 50px;
  background: ${theme.colors.bgWhite};
  font-weight: 400;
  font-size: 18px;
  line-height: 23px;
  color: ${theme.colors.textGreycolor};
  filter: drop-shadow(0px 5px 10px rgba(65, 14, 80, 0.102));
  gap: 10px;
  padding: 0 30px;
  margin: 50px 0;

  svg {
    font-size: 24px;
    color: ${theme.colors.primaryColor};
  }

  span {
    font-size: 14px;
  }
  p {
    font-size: 12px;
  }


  ${media.phone} {
    width: 250px;

    svg {
      font-size: 24px;
    }
  }
`;

interface RoleCardI {
  icon?: any;
  text?: string;
  location?: string;
  handleClick?: any;
}
const MychurchLayout: FC<RoleCardI> = ({
  icon,
  text,
  handleClick,
  location,
}) => {
  return (
    <Container onClick={handleClick}>
      <div>
        <span>{text}</span>
        <p>{location}</p>
      </div>
      <span>{icon}</span>
    </Container>
  );
};

export default MychurchLayout;
