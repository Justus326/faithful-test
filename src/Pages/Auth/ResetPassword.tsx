import { useNavigate } from "react-router-dom";
import PrimaryButton from "../../Components/Form/Buttons/PrimaryButton";
import TextInput from "../../Components/Form/inputs/TextInput";
import FormWrapper from "../../Layouts/FormWrapper";
import AuthMain from "./AuthMain";
import { AuthLogo, AuthTitle, AuthLink, AuthSmallText } from "./style";

const ResetPassword = () => {
  const navigate = useNavigate();

  return (
    <AuthMain placeItemsCenter={true}>
      <AuthLogo src="/assets/images/png/logo.png" />
      <AuthTitle>Reset Password</AuthTitle>
      <FormWrapper>
        <TextInput placeholder="Email" />
        <PrimaryButton
          text="Send Reset Email"
          handleClick={() => navigate("/auth/change-password")}
        />
      </FormWrapper>
      <AuthSmallText>
        Already have an account? <AuthLink to="/">Login here</AuthLink>
      </AuthSmallText>
    </AuthMain>
  );
};

export default ResetPassword;
