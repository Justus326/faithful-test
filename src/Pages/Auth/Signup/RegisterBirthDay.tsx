import { useNavigate } from "react-router-dom";
import PrimaryButton from "../../../Components/Form/Buttons/PrimaryButton";
import TextInput from "../../../Components/Form/inputs/TextInput";
import FormWrapper from "../../../Layouts/FormWrapper";
import MychurchLayout from "../../../Layouts/MychurchLayout";
import AuthMain from "../AuthMain";
import { AuthLogo, AuthTitle, AuthSubTitle } from "../style";
import { MdCheckCircle } from "react-icons/md";
const RegisterBirthday = () => {
  const navigate = useNavigate();

  return (
    <AuthMain>
      <AuthLogo src="/assets/images/png/logo.png" />
      <AuthTitle>Sign Up</AuthTitle>
      <AuthSubTitle>Register as a church member by</AuthSubTitle>

      <MychurchLayout
        text="the faithfuls"
        icon={<MdCheckCircle />}
        location="New Heaven"
      />

      <AuthTitle style={{ marginBottom: "50px" }}>
        Let's Know Your BirthDay
      </AuthTitle>

      <FormWrapper>
        <TextInput placeholder={"Birthday"} type="date" />
        <PrimaryButton
          text="Next"
          handleClick={() => navigate("/auth/signup/success")}
        />
      </FormWrapper>
    </AuthMain>
  );
};

export default RegisterBirthday;
