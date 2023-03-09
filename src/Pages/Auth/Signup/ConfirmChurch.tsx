import React from "react";
import PrimaryButton from "../../../Components/Form/Buttons/PrimaryButton";
import AuthMain from "../AuthMain";
import { useNavigate } from "react-router-dom";
import {
  BigPrimaryColorText,
  ChurchDetailsContainer,
  ChurchSingleDetail,
  DetailProp,
  DetailValue,
  SideBySideButtonContainer,
} from "./styles";

const ConfirmChurch = () => {
  const navigate = useNavigate();
  return (
    <AuthMain customPadding="50px">
      <BigPrimaryColorText>
        Please confirm, is this your church?
      </BigPrimaryColorText>
      <ChurchDetailsContainer>
        <ChurchSingleDetail>
          <DetailProp>Church Name</DetailProp>
          <DetailValue>The fiathfuls</DetailValue>
        </ChurchSingleDetail>
        <ChurchSingleDetail>
          <DetailProp>Country</DetailProp>
          <DetailValue>Nigeria</DetailValue>
        </ChurchSingleDetail>
        <ChurchSingleDetail>
          <DetailProp>Denomination</DetailProp>
          <DetailValue>Penticostal</DetailValue>
        </ChurchSingleDetail>
        <ChurchSingleDetail>
          <DetailProp>State</DetailProp>
          <DetailValue>Lagos</DetailValue>
        </ChurchSingleDetail>
      </ChurchDetailsContainer>
      <SideBySideButtonContainer>
        <PrimaryButton
          text="Yes, this is my church"
          handleClick={() =>
            navigate("/auth/signup/role/member/register-birthday")
          }
        />
        <PrimaryButton
          text="No, Keep searching"
          outlined={true}
          handleClick={() => navigate("/auth/signup/role/member/find-church")}
        />
      </SideBySideButtonContainer>
    </AuthMain>
  );
};

export default ConfirmChurch;
