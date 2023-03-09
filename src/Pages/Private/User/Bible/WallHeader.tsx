import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../../../ReduxStore/app/hooks";
import {
  selectNav,
  setCurrentInnerNav,
} from "../../../../ReduxStore/features/navSlice";
import { InnerHeaderContainer, InnerNavlink } from "./styles";

interface IWallHeader {
  listItems?: any;
  
}
const InnerHeader: FC<IWallHeader> = ({ listItems }) => {
  const { currentInnerNav } = useAppSelector(selectNav);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrentInnerNav(1));
  }, [dispatch]);

  return (
    <InnerHeaderContainer>
      {listItems?.map((item: any) => (
        <InnerNavlink
          className={`${currentInnerNav === item?.id && "active"}`}
          onClick={() => dispatch(setCurrentInnerNav(item?.id))}
        >
          {item?.nav}
        </InnerNavlink>
      ))}
    </InnerHeaderContainer>
  );
};

export default InnerHeader;
