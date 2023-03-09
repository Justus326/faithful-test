import React from 'react';
import { useAppSelector } from "../../../../ReduxStore/app/hooks";
import { selectNav } from "../../../../ReduxStore/features/navSlice";
import { sermonConfigInnerNav } from "../../../../Utils/innerHeaderNavs";
import WallHeader from "./WallHeader";
import WrittenSermon from "./WrittenSermon";
import VideoSermon from "./VideoSermon";
import AudioSermon from "./AudioSermon";
import VideoPlayer from './VideoPlayer';
import {IndexContainer} from './styles'

const PrayerWall = () => {
  const { currentInnerNav } = useAppSelector(selectNav);

  return (
    <IndexContainer>
      <VideoPlayer />
      
      <WallHeader listItems={sermonConfigInnerNav} />

      {currentInnerNav === 1 ? (
        <WrittenSermon />
      ) : currentInnerNav === 2 ? (
        <VideoSermon />
      ) : (
        <AudioSermon />
      )}
    </IndexContainer>
  );
};

export default PrayerWall;
