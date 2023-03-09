import TextInput from "../../../Components/Form/inputs/TextInput";
import FormWrapper from "../../../Layouts/FormWrapper";
import { FiSearch } from "react-icons/fi";
import AuthMain from "../AuthMain";
import {
  AuthLogo,
  AuthTitle,
  AuthLink,
  AuthSmallText,
  AuthSubTitle,
} from "../style";
import { ChurchList } from "./styles";
import ChurchCard from "../../../Layouts/ChurchCard";
import { useNavigate } from "react-router-dom";
const FindYourChurch = () => {
  const navigate = useNavigate();
  return (
    <AuthMain>
      <AuthLogo src="/assets/images/png/logo.png" />
      <AuthTitle>Sign Up</AuthTitle>
      <AuthSubTitle>Register as a church member by</AuthSubTitle>
      <AuthTitle>Find Your Church</AuthTitle>
      <AuthSmallText>
        If you cant find your church <AuthLink to="#">Click here</AuthLink>
      </AuthSmallText>
      <FormWrapper>
        <TextInput placeholder="Search" leftIcon={<FiSearch />} />
      </FormWrapper>
      <ChurchList>
        <ChurchCard
          churchTitle="Faithful church"
          churchLocation="New Heaven enugu"
          churchLogo="/assets/images/png/logo.png"
          handleClick={() =>
            navigate("/auth/signup/role/member/confirm-church")
          }
        />
      </ChurchList>
    </AuthMain>
  );
};

export default FindYourChurch;
