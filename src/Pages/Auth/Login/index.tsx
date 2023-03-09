import { useDispatch } from "react-redux";
import PrimaryButton from "../../../Components/Form/Buttons/PrimaryButton";
import TextInput from "../../../Components/Form/inputs/TextInput";
import FormWrapper from "../../../Layouts/FormWrapper";
import { setUser } from "../../../ReduxStore/features/userSlice";
import { loginInput } from "../../../Utils/authInput";
import AuthMain from "../AuthMain";
import { AuthLogo, AuthTitle, AuthLink, AuthSmallText } from "./../style";

const Login = () => {
  const dispatch = useDispatch();

  return (
    <AuthMain placeItemsCenter={true}>
      <AuthLogo src="/assets/images/png/logo.png" />
      <AuthTitle>Login</AuthTitle>
      <FormWrapper>
        {loginInput?.map((input) => (
          <TextInput placeholder={input.placeholder} type={input?.type} />
        ))}
        <AuthLink to="/auth/reset-password">Forgot Password </AuthLink>
        <PrimaryButton
          text="Login"
          handleClick={() => dispatch(setUser("user"))}
        />
      </FormWrapper>
      <AuthSmallText>
        Don't have an account?{" "}
        <AuthLink to="/auth/signup">Sign Up here</AuthLink>
      </AuthSmallText>
    </AuthMain>
  );
};

export default Login;
