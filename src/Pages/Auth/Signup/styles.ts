import styled from "styled-components";
import { media } from "../../../Screens";
import { theme } from "../../../theme";

export const RoleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;

  ${media.phone} {
    flex-direction: column;
    justify-content: center;
    width: 100%;
  }
`;

export const Role = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  ${media.phone} {
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

export const ChurchList = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 20px;
`;

export const BigPrimaryColorText = styled.p`
  display: flex;
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 38px;
  color: ${theme.colors.primaryColor};
  margin-bottom: 100px;
  width: 100%;
  align-items: center;
  justify-content: center;

  ${media.phone} {
    font-size: 25px;
    margin-bottom: 50px;
  }
`;

export const ChurchDetailsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  justify-content: center;
  width: 100%;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
`;

export const ChurchSingleDetail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 0.5;
  min-width: 40%;
`;

export const DetailProp = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: ${theme.colors.secondaryColor};
`;

export const DetailValue = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  color: ${theme.colors.secondaryColor};
`;

export const SideBySideButtonContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 50px;
  margin-top: 100px;

  ${media.phone} {
    flex-direction: column;
    gap: 30px;
  }
`;

export const VerifyChurchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  width: 700px;

  ${media.phone} {
    width: 100%;
  }
`;

export const VerifyImage = styled.img`
  width: 30%;

  ${media.phone} {
    width: 50%;
  }
`;

export const VerificationInfoContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
  gap: 20px;
  padding-top: 20px;
`;
