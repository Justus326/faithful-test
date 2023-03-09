import React from 'react';
import { useAppSelector } from "../../../../ReduxStore/app/hooks";
import { selectNav } from "../../../../ReduxStore/features/navSlice";
import { userConfigInnerNav } from "../../../../Utils/innerHeaderNavs";
import WallHeader from "./WallHeader";
import PrayerRequest from "./PrayerRequest";
import Testimonies from "./Testimonies";
import ChurchPrayers from "./ChurchPrayers";

const PrayerWall = () => {
  const { currentInnerNav } = useAppSelector(selectNav);

  return (
    <>
      <WallHeader listItems={userConfigInnerNav} />

      {currentInnerNav === 1 ? (
        <PrayerRequest />
      ) : currentInnerNav === 2 ? (
        <Testimonies />
      ) : (
        <ChurchPrayers />
      )}
    </>
  );
};

export default PrayerWall;
