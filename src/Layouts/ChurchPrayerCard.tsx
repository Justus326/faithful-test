import React, { FC } from "react";
import { BsFillChatFill } from "react-icons/bs";
import styled from "styled-components";
import { theme } from "../theme";
import { media } from "../Screens";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 450px;
  height: 200px;
  background: ${theme.colors.bgWhite};
  filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.051));
  padding: 20px;
  ${media.phone} {
    width:340px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    margin-left:40px;
  }   
`;

const TopItems = styled.div`
  display: flex;
  flex-direction: column;
  
`;

const Date = styled.div`
font-weight: 400;
font-size: 10px;
line-height: 13px;
color: #151C4D;
`;
const User = styled.div`
font-style: normal;
font-weight: 400;
font-size: 15px;
line-height: 25px;
color: #151C4D;

`;

const Reading = styled.div`
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 18px;
color: #151C4D;
`;


const PrayerPoint = styled.div`
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 20px;
color: #151C4D;

`;


const BottomSection = styled.div`
display: flex;
justify-content: space-between;
margin-top: 10px;

`;


const UserProfilePhoto = styled.div`
display: flex;


`;


const UserProfilePhoto2 = styled.div`
padding: 0px 10px;

`;


const PeoplePrayed = styled.div`
padding: 0px 10px;
`;


const PrayerIcon = styled.div`

`;






interface IRequestCard {
  
  user: any;
  date:any;
  prayerPoint: string;
  reading: string;
  userProfilePhoto: any;
  userProfilePhoto2: any;
  peoplePrayed: number;
  prayerIcon: any;
}

const RequestCard: FC<IRequestCard> = ({  user, date,  prayerPoint, reading , 
    userProfilePhoto, userProfilePhoto2, peoplePrayed,  prayerIcon }) => {
  return (
    <Container >
      <TopItems>
        <User>{user}</User>
        <Date>{date}</Date>
        </TopItems>
        <PrayerPoint>{prayerPoint}</PrayerPoint>
        <Reading>{reading}</Reading>
         <BottomSection>
         <UserProfilePhoto>{userProfilePhoto}
          <UserProfilePhoto2>{userProfilePhoto2}</UserProfilePhoto2>
          <PeoplePrayed>{peoplePrayed} people prayed</PeoplePrayed>
          </UserProfilePhoto>          
          <PrayerIcon>{prayerIcon}</PrayerIcon>
         </BottomSection>
    </Container>
  );
};

export default RequestCard;
