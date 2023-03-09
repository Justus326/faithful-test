import React from "react";
import { useNavigate } from "react-router-dom";
import PrimaryButton from "../../../Components/Form/Buttons/PrimaryButton";
import TextInput from "../../../Components/Form/inputs/TextInput";
import PaystackPaymentButton from "../../../Components/Paystack";
import FormWrapper from "../../../Layouts/FormWrapper";
import { theme } from "../../../theme";
import { churchVerificationInputs } from "../../../Utils/authInput";
import AuthMain from "../AuthMain";
import { AuthSubTitle, AuthTitle } from "../style";
import { VerificationInfoContainer } from "./styles";

const ChurchVerificationPage = () => {
  const navigate = useNavigate();

  return (
    <AuthMain>
      <AuthTitle style={{ color: theme.colors.primaryColor }}>
        Verify Church Location
      </AuthTitle>
      <AuthSubTitle>Please confirm the information you provided </AuthSubTitle>
      <FormWrapper>
        <VerificationInfoContainer>
          {churchVerificationInputs?.map((input) => (
            <TextInput placeholder={input.placeholder} type={input?.type} />
          ))}
        </VerificationInfoContainer>
        <VerificationInfoContainer
          style={{
            flexDirection: "column",
            alignItems: "flex-start",
            marginTop: "20px",
          }}
        >
          <TextInput placeholder={"Names of Clergy/Priests"} />
          <TextInput placeholder={"Role of Clergy/Priests"} />
          <TextInput placeholder={"Clergy's Phone Num."} />
          <PrimaryButton text="Add Clergy/Priest" outlined={true} />
        </VerificationInfoContainer>
        <VerificationInfoContainer style={{ alignItems: "center" }}>
          <PaystackPaymentButton
            text="Proceed to Pay"
            email="ebukaJohnmartins@gmail.com"
            amount={1000}
            metaData={{ phone: "07044377963" }}
            size="medium"
            handleSucces={() =>
              navigate("/auth/signup/role/admin/verify-church-location/success")
            }
          />
        </VerificationInfoContainer>
      </FormWrapper>
    </AuthMain>
  );
};

export default ChurchVerificationPage;
