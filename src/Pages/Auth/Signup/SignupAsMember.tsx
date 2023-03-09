import { useNavigate } from "react-router-dom";
import PrimaryButton from "../../../Components/Form/Buttons/PrimaryButton";
import TextInput from "../../../Components/Form/inputs/TextInput";
import FormWrapper from "../../../Layouts/FormWrapper";
import { memberSignUpInputs } from "../../../Utils/authInput";
import AuthMain from "../AuthMain";
import {
  AuthLogo,
  AuthTitle,
  AuthLink,
  AuthSmallText,
  AuthSubTitle,
} from "../style";
const SignupAsMember = () => {
const navigate = useNavigate()

  return (
    <AuthMain>
      <AuthLogo src="/assets/images/png/logo.png" />
      <AuthTitle>Sign Up</AuthTitle>
      <AuthSubTitle>Register as a church member by</AuthSubTitle>
      <FormWrapper>
        {memberSignUpInputs?.map((input) => (
          <TextInput
            placeholder={input?.placeholder}
            icon={input?.ActiveIcon}
          />
        ))}
        <AuthSmallText>
          By signing up you accept the{" "}
          <AuthLink to="#">Terms of service</AuthLink> and{" "}
          <AuthLink to="#">Privay Policy</AuthLink>
        </AuthSmallText>
        <PrimaryButton
          text="Next"
          handleClick={() => navigate("/auth/signup/role/member/find-church")}
        />
        <AuthSmallText>
          Already have an account? <AuthLink to="/">Login here</AuthLink>
        </AuthSmallText>
      </FormWrapper>
    </AuthMain>
  );
};

export default SignupAsMember;
