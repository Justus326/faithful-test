import React from 'react';
import { VideoSermonContainer, VideoSermonEventNote, EventCaption, EventIcon,EventTopic, 
  Activity, EventName, EventDate, VideoSponsor, VideoAdText} from './styles';
  import { FiActivity } from "react-icons/fi";
  import { media } from "./../../../../Screens";
import VideoSermonCard from './VideoSermonCard';
 
 

const VideoSermon = () => {
  return (
    <VideoSermonContainer>

          <VideoSermonEventNote>
          <EventCaption>
            <EventIcon><FiActivity /></EventIcon>
            <EventTopic>Upcoming Activities & Events</EventTopic>
          </EventCaption>
            <Activity>
              <EventName>Mid-Week Service</EventName>
              <EventDate>Wed, oct 14</EventDate>
            </Activity>

            <Activity>
              <EventName>Mid-Week Service</EventName>
              <EventDate>Wed, oct 14</EventDate>
            </Activity>
            
        </VideoSermonEventNote>
        <VideoSponsor>Sponsored</VideoSponsor>
        <VideoAdText>Ads</VideoAdText>
        <div className="ad">           
          <img src="assets/images/ads.png" alt='Ad' width={170}  height={170} />
        </div>

        <VideoSermonCard />
        <VideoSermonCard />
        <VideoSermonCard />
        <VideoSermonCard />
        <VideoSermonCard />
   
    </VideoSermonContainer>
  )
}

export default VideoSermon