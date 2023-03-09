import React from "react";
import { useAppSelector } from "../../../../ReduxStore/app/hooks";
import { selectNav } from "../../../../ReduxStore/features/navSlice";
import { adminConfigInnerNav } from "../../../../Utils/innerHeaderNavs";
import InnerHeader from "./../../../../Components/Nav/InnerHeader";
import Ads from "./Ads";
import DailyScriptures from "./DailyScriptures";
import Banners from "./Banners";

const Configurations = () => {
  const { currentInnerNav } = useAppSelector(selectNav);

  return (
    <>
      <InnerHeader listItems={adminConfigInnerNav} />

      {currentInnerNav === 1 ? (
        <Ads />
      ) : currentInnerNav === 2 ? (
        <DailyScriptures />
      ) : (
        <Banners />
      )}
    </>
  );
};

export default Configurations;
