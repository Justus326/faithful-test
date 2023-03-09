import React, { useState } from "react";
import { FiActivity } from "react-icons/fi";
import RouteWrapper from "../../../../Layouts/RouteWrapper";
import PrayerRequestCard from "../../../../Layouts/ChurchPrayerCard";

import { DailyScripturesContainer, PrayerRequestContainer, EventNote, EventCaption,
  DailyPrayer, EventIcon, EventTopic, Activity, EventName, EventDate, Sponsor,
  AdText} from "./style";

const ChurchPrayers = () => {
    const [showAdd, setShowAdd] = useState(false);
    const [showEdit, setShowEdit] = useState(false);

  return (
    <RouteWrapper>
      <DailyScripturesContainer>
      
      <EventNote>
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
        </EventNote>
        <Sponsor>Sponsored</Sponsor>
        <AdText>Ads</AdText>
        <div className="ad">           
          <img src="assets/images/ads.png" alt='Ad' width={170}  height={170} />
        </div>
       
       <DailyPrayer>October Daily Fasting & Prayers</DailyPrayer>
        <PrayerRequestContainer>
          <PrayerRequestCard
           user="Day 2"
           date="Reading: John 3:16"
           prayerPoint=""
           reading="For God so loved the world, as to give his only begotten Son; that whosoever believeth in him, may not perish, but may have life everlasting."
           userProfilePhoto={<img src='assets/images/img1.png' alt='userPhoto' width={25} height={25} /> }
           userProfilePhoto2={ <img src='assets/images/img3.png' alt='userPhoto' width={25} height={25}  />}
           peoplePrayed={14}
           prayerIcon={<img src="assets/images/prayicon.png" />}
          
          />
          <PrayerRequestCard
           user="Day 2"
           date="Reading: John 3:16"
           prayerPoint=""
           reading="For God so loved the world, as to give his only begotten Son; that whosoever believeth in him, may not perish, but may have life everlasting."
           userProfilePhoto={<img src='assets/images/img1.png' alt='userPhoto' width={25} height={25} /> }
           userProfilePhoto2={ <img src='assets/images/img3.png' alt='userPhoto' width={25} height={25}  />}
           peoplePrayed={14}
           prayerIcon={<img src="assets/images/prayicon.png" />}
         
          />
          <PrayerRequestCard
           user="Day 2"
           date="Reading: John 3:16"
           prayerPoint=""
           reading="For God so loved the world, as to give his only begotten Son; that whosoever believeth in him, may not perish, but may have life everlasting."
           userProfilePhoto={<img src='assets/images/img1.png' alt='userPhoto' width={25} height={25} /> }
           userProfilePhoto2={ <img src='assets/images/img3.png' alt='userPhoto' width={25} height={25}  />}
           peoplePrayed={14}
           prayerIcon={<img src="assets/images/prayicon.png" />}
          
          />
          <PrayerRequestCard
           user="Day 2"
           date="Reading: John 3:16"
           prayerPoint=""
           reading="For God so loved the world, as to give his only begotten Son; that whosoever believeth in him, may not perish, but may have life everlasting."
           userProfilePhoto={<img src='assets/images/img1.png' alt='userPhoto' width={25} height={25} /> }
           userProfilePhoto2={ <img src='assets/images/img3.png' alt='userPhoto' width={25} height={25}  />}
           peoplePrayed={14}
           prayerIcon={<img src="assets/images/prayicon.png" />}
          
          />
          
        </PrayerRequestContainer>
      </DailyScripturesContainer>
    </RouteWrapper>
  );
};

export default ChurchPrayers;