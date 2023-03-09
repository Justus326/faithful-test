import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useAppSelector } from "./ReduxStore/app/hooks";
import { selectUser } from "./ReduxStore/features/userSlice";
import AuthRoutes from "./Routes/AuthRoutes";
import PrivateRoutes from "./Routes/PrivateRoutes";

const Router = () => {
  const { currentUser } = useAppSelector(selectUser);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/*"
          element={!currentUser ? <AuthRoutes /> : <PrivateRoutes />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
