import React, { useState } from "react";
import Button from "./Button";
import { BsFillChatFill } from "react-icons/bs";
import { FiActivity } from "react-icons/fi";
import RouteWrapper from "../../../../Layouts/RouteWrapper";
import PrayerRequestCard from "../../../../Layouts/TestimonyCard";
// import EditScripture from "./EditScripture";
import { DailyScripturesContainer, TestimonyContainer, AdText, EventNote,
  EventCaption, EventIcon, EventTopic, Activity, EventName, EventDate,
  Sponsor  } from "./style";
import AddTestimony from "./AddTestimony";

const PrayerRequest = () => {
    const [showAdd, setShowAdd] = useState(false);
    const [showEdit, setShowEdit] = useState(false);

  return (
    <RouteWrapper>
      <DailyScripturesContainer>
      <Button
          text="Add a Testimony"
          size="medium"
          handleClick={() => {
            setShowAdd(true);
            setShowEdit(false);
          }}
        />
       
       {showAdd && !showEdit && <AddTestimony setState={setShowAdd} />}
        {/* {showEdit && !showAdd && <EditScripture setState={setShowEdit} />} */}

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
        <TestimonyContainer>
          <PrayerRequestCard
           user="Bismark Achodo"
           date="12/9/20"         
           reading="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings."           
           replyIcon={<BsFillChatFill />}
           setEdit={setShowEdit} setAdd={setShowAdd}
          />
          <PrayerRequestCard
           user="Bismark Achodo"
           date="12/9/2020"           
           reading="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings."           
           replyIcon={<BsFillChatFill />}
           setEdit={setShowEdit} setAdd={setShowAdd}
          />
          <PrayerRequestCard
           user="Bismark Achodo"
           date="12/9/2020"           
           reading="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings."          
           replyIcon={<BsFillChatFill />}
           setEdit={setShowEdit} setAdd={setShowAdd}
          />
          <PrayerRequestCard
           user="Bismark Achodo"
           date="12/9/2020"           
           reading="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings."          
           replyIcon={<BsFillChatFill />}
           setEdit={setShowEdit} setAdd={setShowAdd}
          />
          
        </TestimonyContainer>
      </DailyScripturesContainer>
    </RouteWrapper>
  );
};

export default PrayerRequest;