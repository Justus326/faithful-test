import React from "react";
import {
  LogoutButton,
  LogoutContainer,
  Navlink,
  NavlinkContainer,
  SidebarContainer,
} from "./styles";
import { useAppSelector } from "./../../ReduxStore/app/hooks";
import { removeUser, selectUser } from "./../../ReduxStore/features/userSlice";
import { rolesRouters } from "./../../Utils/config";
import { useLocation, useNavigate } from "react-router-dom";
import { selectNav, SidebarToggle } from "./../../ReduxStore/features/navSlice";
import { MdLogout } from "react-icons/md";
import { useDispatch } from "react-redux";

const Sidebar = () => {
  const { pathname } = useLocation();
  const { currentUser } = useAppSelector(selectUser);
  const { toggleSidebar } = useAppSelector(selectNav);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <SidebarContainer isToggled={toggleSidebar}>
      <NavlinkContainer>
        {currentUser === "user" ? (
          <>
            {rolesRouters?.user.map((nav) => (
              <Navlink
                to={nav?.route}
                className={`${pathname === nav?.route && "active"}`}
                onClick={() => dispatch(SidebarToggle(false))}
              >
                {nav?.icon}
                <span>{nav?.nav}</span>
              </Navlink>
            ))}
          </>
        ) : currentUser === "admin" ? (
          <>
            {rolesRouters?.admin.map((nav) => (
              <Navlink
                to={nav?.route}
                className={`${pathname === nav?.route && "active"}`}
                onClick={() => dispatch(SidebarToggle(false))}
              >
                {nav?.icon}
                <span>{nav?.nav}</span>
              </Navlink>
            ))}
          </>
        ) : (
          <>
            {rolesRouters?.superAdmin.map((nav) => (
              <Navlink
                to={nav?.route}
                className={`${pathname === nav?.route && "active"}`}
                onClick={() => dispatch(SidebarToggle(false))}
              >
                {nav?.icon}
                <span>{nav?.nav}</span>
              </Navlink>
            ))}
          </>
        )}
        <LogoutContainer>
          <LogoutButton
            onClick={() => {
              dispatch(removeUser());
              navigate("/");
            }}
          >
            <MdLogout />
            <span>Logout</span>
          </LogoutButton>
        </LogoutContainer>
      </NavlinkContainer>
    </SidebarContainer>
  );
};

export default Sidebar;
