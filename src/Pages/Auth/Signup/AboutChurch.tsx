import { useNavigate } from "react-router-dom";
import PrimaryButton from "../../../Components/Form/Buttons/PrimaryButton";
import FilePicker from "../../../Components/Form/inputs/FilePicker";
import TextInput from "../../../Components/Form/inputs/TextInput";
import FormWrapper from "../../../Layouts/FormWrapper";
import { AboutChurchInputs } from "../../../Utils/authInput";
import AuthMain from "../AuthMain";
import {
  AuthLogo,
  AuthTitle,
  AuthLink,
  AuthSmallText,
  AuthSubTitle,
} from "../style";
const AboutChurch = () => {
  const navigate = useNavigate();

  return (
    <AuthMain>
      <AuthLogo src="/assets/images/png/logo.png" />
      <AuthTitle>Sign Up</AuthTitle>
      <AuthSubTitle>Tell us about your church</AuthSubTitle>
      <FormWrapper>
        {AboutChurchInputs?.map((input) => (
          <>
            {input.type === "button" ? (
              <PrimaryButton text={input?.text} outlined={input?.outlined} />
            ) : input.type === "file" ? (
              <FilePicker text={input?.text} />
            ) : (
              <TextInput
                placeholder={input?.placeholder}
                // icon={input?.ActiveIcon}
              />
            )}
          </>
        ))}{" "}
        <PrimaryButton
          text="Send"
          handleClick={() => navigate("/auth/signup/role/admin/verify-church")}
        />
        <AuthSmallText>
          <AuthLink to="#">Skip and Proceed</AuthLink>
        </AuthSmallText>
        <AuthSmallText>
          Already have an account? <AuthLink to="/"> Login here</AuthLink>
        </AuthSmallText>
      </FormWrapper>
    </AuthMain>
  );
};

export default AboutChurch;
