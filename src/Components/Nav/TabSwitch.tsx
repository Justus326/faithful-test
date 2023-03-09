import React, { FC, useEffect } from "react";
import { Tab, TabSwitchContainer } from "./styles";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../ReduxStore/app/hooks";
import { selectNav, setCurrentTab } from "../../ReduxStore/features/navSlice";

interface ITabSwitch {
  listItems?: any;
}

const TabSwitch: FC<ITabSwitch> = ({ listItems }) => {
  const { currentTab } = useAppSelector(selectNav);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrentTab(1));
  }, [dispatch]);

  return (
    <TabSwitchContainer>
      {listItems?.map((item: any, index: any) => (
        <Tab
          className={`${currentTab === item?.id && "active"}`}
          onClick={() => dispatch(setCurrentTab(item?.id))}
        >
          {item?.tabName}
        </Tab>
      ))}
    </TabSwitchContainer>
  );
};

export default TabSwitch;
