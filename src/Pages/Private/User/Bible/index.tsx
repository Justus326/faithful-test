import React from 'react';
import { useAppSelector } from "../../../../ReduxStore/app/hooks";
import { selectNav } from "../../../../ReduxStore/features/navSlice";
import { bibleConfigInnerNav } from "../../../../Utils/innerHeaderNavs";
import WallHeader from "./WallHeader";
import BibleBooks from './BibleBooks';
import BibleVersion from './BibleVersion';
import BibleFonts from './BibleFonts';


const PrayerWall = () => {
  const { currentInnerNav } = useAppSelector(selectNav);

  return (
    <>
      <WallHeader listItems={bibleConfigInnerNav} />

      {currentInnerNav === 1 ? (
        <BibleBooks />
      ) : currentInnerNav === 2 ? (
        <BibleVersion />
      ) : (
        <BibleFonts />
      )}
    </>
  );
};

export default PrayerWall;
