import RoleCardLayout from "../../../Layouts/RoleCardLayout";
import AuthMain from "../AuthMain";
import { AuthSmallText, AuthTitle } from "../style";
import { Role, RoleContainer } from "./styles";
import { BsPersonFill } from "react-icons/bs";
import { RiUserSettingsFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const SignupAs = () => {
  const navigate = useNavigate();

  return (
    <AuthMain placeItemsCenter={true}>
      <AuthTitle style={{ marginBottom: "50px" }}>
        What role would you like to sign up for?
      </AuthTitle>
      <RoleContainer>
        <Role>
          <RoleCardLayout
            text="Sign up as a Member"
            icon={<BsPersonFill />}
            handleClick={() => navigate("/auth/signup/role/member")}
          />
          <AuthSmallText>
            You can sign up as a Member in to your church. If you can't find
            your church do communicate with your church admin to sign up
          </AuthSmallText>
        </Role>
        <Role>
          <RoleCardLayout
            text="Sign up as an Admin"
            icon={<RiUserSettingsFill />}
            handleClick={() => navigate("/auth/signup/role/admin")}
          />
          <AuthSmallText>
            You can sign up as a church admin to add you church to The
            Faithful's Data Base
          </AuthSmallText>
        </Role>
      </RoleContainer>
    </AuthMain>
  );
};

export default SignupAs;
