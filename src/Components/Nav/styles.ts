import { Link } from "react-router-dom";
import styled from "styled-components";
import { theme } from "./../../theme";
import { media } from "./../../Screens";

export const HeaderContainer = styled.div`
  flex: 0.1;
  border: 1px solid rgba(112, 112, 112, 0.06);
  filter: drop-shadow(0px 5px 10px rgba(65, 14, 80, 0.161));
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;
  z-index: 1000;

  ${media.tablet} {
    padding: 0 10px;
  }
  ${media.phone} {
    padding: 0 10px;
  }
`;

export const HeaderLeftContent = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  width: 50%;
  ${media.phone} {
    gap: 20px;
  }
`;
export const HeaderRightContent = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  ${media.phone} {
    gap: 10px;
  }

  svg {
    font-size: 30px;

    ${media.phone} {
      font-size: 16px;
    }
  }
`;

export const Avatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  border: 2px solid ${theme.colors.primaryColor};
  border-radius: 50%;
  background-color: ${theme.colors.bgPrimary};
  color: ${theme.colors.primaryColor};
  ${media.phone} {
    width: 20px;
    height: 20px;
  }
`;

export const Menu = styled.div`
  display: none;
  svg {
    font-size: 24px;
  }

  ${media.tablet} {
    display: flex;
  }
  ${media.phone} {
     svg {
      font-size: 20px;
    }
`;

export const HeaderLogo = styled.img`
  width: 150px;

  ${media.phone} {
    width: 100px;
  }
`;

export const HeaderPageTitle = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  color: ${theme.colors.primaryColor};
  text-transform: capitalize;
  width: 100%;

  ${media.phone} {
    font-size: 15px;
  }
`;

interface ISidebar {
  isToggled: Boolean;
}

export const SidebarContainer = styled.div<ISidebar>`
  display: flex;
  flex-direction: column;
  align-items: center;
  //   flex: 0.15;
  width: 15%;
  height: 100%;
  left: 0;
  filter: drop-shadow(0px 5px 10px rgba(65, 14, 80, 0.161));
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  transition: all 0.5s ease-in-out;
  background: ${theme.colors.bgWhite};
  z-index: 999;
  overflow: hidden;
  overflow-y: auto;

  ${media.tablet} {
    position: absolute;
    left: ${(props) => (props.isToggled ? "0" : "-100%")};
    width: 30%;
    z-index: 100;
  }
  ${media.phone} {
    position: absolute;
    left: ${(props) => (props.isToggled ? "0" : "-100%")};
    width: 50%;
    z-index: 100;
  }
`;

export const NavlinkContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 100px 0;
  gap: 20px;
  width: 100%;
`;
export const Navlink = styled(Link)`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 10px;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 23px;
  color: ${theme.colors.textGreycolor};
  cursor: pointer;
  text-decoration: none;
  position: relative;
  padding-left: 30px;

  &.active {
    color: ${theme.colors.primaryColor};};
  }
  
  &.active::after {
        content: "";
        background:${theme.colors.primaryColor};
        width: 4px;
        height: 43px;
        position: absolute;
        right : 0;
    }
  

  &:hover {
    color: ${theme.colors.primaryColor};};
  }

  ${media.phone}{
    font-size: 16px;
    padding-left: 10px;

  }
`;
export const LogoutContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 20px;
  padding-left: 30px;
  cursor: pointer;
  ${media.phone} {
    font-size: 16px;
    padding-left: 10px;
  }
`;

export const LogoutButton = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  font-size: 20px;

  svg {
    font-size: 20px;
  }
`;

export const TabSwitchContainer = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${theme.colors.borderColor};
`;

export const Tab = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  cursor: pointer;
  background-color: ${theme.colors.bgGrey};
  color: ${theme.colors.secondaryColor};
  width: 257px;
  height: 65px;
  font-size: 20px;
  line-height: 25px;

  &.active {
    background-color: ${theme.colors.bgPrimary};
    color: ${theme.colors.primaryColor};
  }

  ${media.phone} {
    width: auto;
    padding: 10px 20px;
    height: 30px;
    font-size: 16px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
`;

export const InnerHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  height: 70px;
  background: ${theme.colors.bgWhite};
  width: 100%;
  padding: 0 50px;  
  gap: 0px;
  position: absolute;
  top: 0;
  left: 0;
`;

export const InnerNavlink = styled.div`
  display: flex;  
  justify-content: center;
  align-items: flex-end;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 23px;
  color: ${theme.colors.secondaryColor};
  cursor: pointer;
  text-decoration: none;
  position: relative;
  width: auto;
  height: 100%;
  text-align: center;
  padding: 10px;

  &.active::after {
    content: "";
    background: ${theme.colors.primaryColor};
    width: 100%;
    height: 4px;
    position: absolute;
    bottom: 0;
    left: 0;
  }

  ${media.phone} {
    font-size: 16px;
    padding-bottom: 10px;
  }
`;
