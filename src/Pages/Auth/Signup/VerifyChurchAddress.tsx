import React from "react";
import AuthMain from "../AuthMain";
import { AuthLink, AuthSmallText } from "../style";
import {
  SideBySideButtonContainer,
  VerifyChurchContainer,
  VerifyImage,
} from "./styles";
import PrimaryButton from "./../../../Components/Form/Buttons/PrimaryButton";
import { useNavigate } from "react-router-dom";

const VerifyChurchAddress = () => {
  const navigate = useNavigate();

  return (
    <AuthMain placeItemsCenter={true}>
      <VerifyChurchContainer>
        <AuthSmallText>
          To enjoy the full functions of this platform, we need to verify that
          your church address exist, you will be charged a token of ₦2000. But
          if you Subscribe to our pro plan your verification will be free
        </AuthSmallText>
        <VerifyImage src="/assets/images/svg/verify.svg" />
        <SideBySideButtonContainer style={{ margin: "0" }}>
          <PrimaryButton text="Proceed to subscribe" />
          <PrimaryButton
            text="Proceed to verify"
            outlined={true}
            handleClick={() =>
              navigate("/auth/signup/role/admin/verify-church-location")
            }
          />
        </SideBySideButtonContainer>
        <p>
          <AuthLink to="#">Verify later</AuthLink>
        </p>
      </VerifyChurchContainer>
    </AuthMain>
  );
};

export default VerifyChurchAddress;
