import React from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { TbBell } from "react-icons/tb";
import { useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../ReduxStore/app/hooks";
import { selectNav, SidebarToggle } from "../../ReduxStore/features/navSlice";
import {
  HeaderContainer,
  HeaderLeftContent,
  HeaderLogo,
  HeaderRightContent,
  HeaderPageTitle,
  Avatar,
  Menu,
} from "./styles";

const Header = () => {
  const { pathname } = useLocation();
  const { toggleSidebar } = useAppSelector(selectNav);
  const dispatch = useAppDispatch();

  return (
    <HeaderContainer>
      <HeaderLeftContent>
        <HeaderLogo src="/assets/images/png/logo.png" />
        <HeaderPageTitle>
          {pathname !== "/"
            ? pathname.substring(1, pathname.length).replace(/-/g, " ")
            : "Dashboard"}
        </HeaderPageTitle>
      </HeaderLeftContent>
      <HeaderRightContent>
        <TbBell />
        <Avatar></Avatar>
        <Menu onClick={() => dispatch(SidebarToggle(!toggleSidebar))}>
          <HiMenuAlt3 />
        </Menu>
      </HeaderRightContent>
    </HeaderContainer>
  );
};

export default Header;
