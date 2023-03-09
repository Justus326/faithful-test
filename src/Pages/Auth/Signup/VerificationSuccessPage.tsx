// import { useNavigate } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import Successful from "../../../Components/Successful";
import AuthMain from "../AuthMain";

const VerificationSuccessPage = () => {
  const navigate = useNavigate();

  return (
    <AuthMain placeItemsCenter={true}>
      <Successful
        successText="Your payment was successful"
        subText="Your verification status will be confirmed within the next 14 days."
        buttonText="Proceed"
        onClick={() => navigate("/")}
      />
    </AuthMain>
  );
};

export default VerificationSuccessPage;
