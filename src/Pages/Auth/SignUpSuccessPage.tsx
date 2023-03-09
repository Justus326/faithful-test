// import { useNavigate } from "react-router-dom";
import Successful from "../../Components/Successful";
import AuthMain from "./AuthMain";

const SignupSuccessPage = () => {
  // const navigate = useNavigate();

  return (
    <AuthMain placeItemsCenter={true}>
      <Successful successText="Sign up completed successfully " />
    </AuthMain>
  );
};

export default SignupSuccessPage;
