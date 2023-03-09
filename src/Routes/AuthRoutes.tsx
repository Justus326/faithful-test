import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import ChangePassword from "../Pages/Auth/ChangePassword";
import Login from "../Pages/Auth/Login";
import ResetPassword from "../Pages/Auth/ResetPassword";
import SignupAsMember from "../Pages/Auth/Signup/SignupAsMember";
import SignupAs from "../Pages/Auth/Signup";
import FindYourChurch from "../Pages/Auth/Signup/FindYourChurch";
import ConfirmChurch from "../Pages/Auth/Signup/ConfirmChurch";
import RegisterBirthday from "./../Pages/Auth/Signup/RegisterBirthDay";
import SignupSuccessPage from "../Pages/Auth/SignUpSuccessPage";
import SignupAsAdmin from "../Pages/Auth/Signup/SignupAsAdmin";
import AboutChurch from "../Pages/Auth/Signup/AboutChurch";
import VerifyChurchAddress from "../Pages/Auth/Signup/VerifyChurchAddress";
import ChurchVerificationPage from "./../Pages/Auth/Signup/ChurchVerificationPage";
import VerificationSuccessPage from "../Pages/Auth/Signup/VerificationSuccessPage";

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/auth/signup" element={<SignupAs />} />
      <Route path="/auth/signup/role/member" element={<SignupAsMember />} />
      <Route path="/auth/signup/role/admin" element={<SignupAsAdmin />} />
      <Route
        path="/auth/signup/role/admin/about-church"
        element={<AboutChurch />}
      />
      <Route
        path="/auth/signup/role/admin/verify-church"
        element={<VerifyChurchAddress />}
      />
      <Route
        path="/auth/signup/role/admin/verify-church-location"
        element={<ChurchVerificationPage />}
      />
      <Route
        path="/auth/signup/role/admin/verify-church-location/success"
        element={<VerificationSuccessPage />}
      />
      <Route
        path="/auth/signup/role/member/find-church"
        element={<FindYourChurch />}
      />
      <Route
        path="/auth/signup/role/member/confirm-church"
        element={<ConfirmChurch />}
      />
      <Route
        path="/auth/signup/role/member/register-birthday"
        element={<RegisterBirthday />}
      />
      <Route path="/auth/reset-password" element={<ResetPassword />} />
      <Route path="/auth/change-password" element={<ChangePassword />} />
      <Route path="/auth/signup/success" element={<SignupSuccessPage />} />
    </Routes>
  );
};

export default AuthRoutes;
