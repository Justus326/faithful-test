import styled from "styled-components";
import { theme } from "./../../theme";
import { Link } from "react-router-dom";
import { media } from "../../Screens";

export const AuthPageContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

export const AuthPageLeftContent = styled.div`
  flex: 0.35;
  height: 100%;

  ${media.phone} {
    flex: 0;
  }
`;

interface rightI {
  customPadding?: string;
}
export const AuthPageRightContent = styled.div<rightI>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: ${(props) =>
    props.customPadding ? props.customPadding : "50px"};
  padding-top: 20px;
  flex: 0.65;
  height: 100%;

  ${media.phone} {
    flex: 1;
    padding: 20px;
    align-items: center;
    background-image: url("/assets/images/png/authimg.png");
  }
`;

export const AuthPageImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const AuthLogo = styled.img`
  width: 150px;
  margin-bottom: 20px;
`;

export const RightContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-y: auto;
  padding-top: 20px;

  &::-webkit-scrollbar {
    width: 0 !important;
  }

  ${media.phone} {
    background: ${theme.colors.bgWhite};
    padding: 10px;
    border-radius: 10px;
  }
`;

export const AuthTitle = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 45px;
  line-height: 56px;
  color: ${theme.colors.titleColor};
  margin-top: 20px;
  margin-bottom: 10px;

  ${media.phone} {
    font-size: 30px;
  }
`;

export const AuthLink = styled(Link)`
padding-left: 10px;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 23px;
  textdecoration: underline;
  color: ${theme.colors.primaryColor};}

  ${media.phone} {
    font-size: 12px;
  }
`;

export const AuthSmallText = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  font-size: 18px;
  line-height: 23px;
  color: ${theme.colors.textGreycolor};
  margin-bottom: 10px;

  ${media.phone} {
    font-size: 12px;
    text-align: center;
  }
`;

export const AuthSubTitle = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 30px;
  color: ${theme.colors.textGreycolor};

  ${media.phone} {
    font-size: 16px;
  }
`;
