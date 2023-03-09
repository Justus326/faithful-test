import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Header from "../Components/Nav/Header";
import Sidebar from "../Components/Nav/Sidebar";
import { useAppSelector } from "../ReduxStore/app/hooks";
import { selectUser } from "../ReduxStore/features/userSlice";
import { rolesRouters } from "../Utils/config";
import { AppBody, AppContainer, RouteBody } from "./styles";

const PrivateRoutes = () => {
  const { currentUser } = useAppSelector(selectUser);

  return (
    <AppContainer>
      <Header />
      <AppBody>
        <Sidebar />
        <RouteBody>
          <Routes>
            {currentUser === "user" ? (
              <>
                {rolesRouters?.user?.map((item: any) => (
                  <Route
                    path={`/${item?.route}`}
                    element={item?.component}
                    key={item}
                  />
                ))}
              </>
            ) : currentUser === "admin" ? (
              <>
                {rolesRouters?.admin?.map((item: any) => (
                  <Route
                    path={`/${item?.route}`}
                    element={item?.component}
                    key={item}
                  />
                ))}
              </>
            ) : (
              <>
                {rolesRouters?.superAdmin?.map((item: any) => (
                  <Route
                    path={`/${item?.route}`}
                    element={item?.component}
                    key={item}
                  />
                ))}
              </>
            )}
          </Routes>
        </RouteBody>
      </AppBody>
    </AppContainer>
  );
};

export default PrivateRoutes;
