import React from 'react';
import AudioSermonCard from './AudioSermonCard';
import { AudioSermonContainer,VideoSermonEventNote, EventCaption, EventIcon,EventTopic, 
  Activity, EventName, EventDate, VideoSponsor, VideoAdText } from './styles';
  import { FiActivity } from "react-icons/fi";

const AudioSermon = () => {
  return (
    <AudioSermonContainer>

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
      <AudioSermonCard />
      <AudioSermonCard />
      <AudioSermonCard />
      <AudioSermonCard />
      <AudioSermonCard />
    </AudioSermonContainer>
  )
}

export default AudioSermon