
import styled from "styled-components";
import { EventNote, EventCaption, EventIcon,EventTopic, Activity, EventName,
  EventDate, Sponsor, AdText} from './styles';
  import { FiActivity } from "react-icons/fi";
  import { media } from "./../../../../Screens";


const WrittenSermonContainerWrap = styled.div`
 width: 100%;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 margin-top: 5%;
 
 div.ad {
  position:absolute;
  margin-left: 760px;
  margin-top: -137%;
  border:2px solid ;    
  height:173px;
  width:173px;
  border-radius: 5%;

  ${media.phone} {
    display: none; 
    }
`;
const WrittenSermonContainer = styled.div`
 width: 40%;
 height:250px;
 background: #FFFFFF;
 margin-left: -20%;
 margin-top: 3%;
 padding: 0px 20px;
 display: flex;
 flex-direction: column;
 justify-content: center;
 ${media.phone} {
  width:90%;
  margin-left: 0%;
  }
`;

const Sermon = styled.div`
font-style: normal;
font-weight: 400;
font-size: 20px;
margin-top:170px;
line-height: 33px;
color: #151C4D;
`;

const Minister = styled.div`
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 26px;
color: #151C4D;
`;



  

const WrittenSermonCard = () => {
  return (
    <WrittenSermonContainerWrap>

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
      
    <WrittenSermonContainer >
      <Sermon>More than Gold</Sermon>
      <Minister>Pst Emeka</Minister>        
    </WrittenSermonContainer>
    <WrittenSermonContainer >
      <Sermon>More than Gold</Sermon>
      <Minister>Pst Emeka</Minister>        
    </WrittenSermonContainer>
    <WrittenSermonContainer >
      <Sermon>More than Gold</Sermon>
      <Minister>Pst Emeka</Minister>        
    </WrittenSermonContainer>
    <WrittenSermonContainer >
      <Sermon>More than Gold</Sermon>
      <Minister>Pst Emeka</Minister>        
    </WrittenSermonContainer>
    <WrittenSermonContainer >
      <Sermon>More than Gold</Sermon>
      <Minister>Pst Emeka</Minister>        
    </WrittenSermonContainer>
    </WrittenSermonContainerWrap>
  );
};

export default WrittenSermonCard;
