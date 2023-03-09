
import { FC } from 'react';
import styled from 'styled-components';
import { media } from "../../../../Screens";


interface IContainer {
    bg?: string;
  }

const Container = styled.div<IContainer>`
width: 500px;
height: 200px;
background: #FFFFFF;
margin-bottom:30px;
box-shadow: rgba(0, 0, 0, 0.20) 0.5px 1px 4px 1px;
${media.phone} {
  width:340px;
  margin-left:30px;
  padding:5px;
}
`;
 
const FirstSection = styled.div`
display:flex;
width: 500px;
${media.phone} {
  widt:300px;
  display: flex;
  flex-direction:row;
}
`;


const UserName = styled.div`
display:flex;
flex-direction:row;
margin-top: 10px;
margin-left: 40px;
font-style: normal;
font-weight: 450;
font-size: 15px;

color: #151C4D;
${media.phone} {
  font-size:15px;
  width:100%;
  display: flex;
  flex-direction:row;

}
`;


const Date = styled.div`
margin-top: 10px;
font-style: normal;
font-weight: 450;
font-size: 10px;
line-height: 13px;
color: #151C4D;
${media.phone} {
  widt:370px;
  margin-left:160px;
  margin-right:270px;
}
`;


const SecondSection = styled.div`
padding:5px 20px;
`;


const PrayerPoint = styled.div`
margin-top: 10px;
font-style: normal;
font-weight: 700;
font-size: 12px;
line-height: 15px;
color: #151C4D;
${media.phone} {  
 margin-top:0px;
  
 }
`;


const Prayer = styled.div`
margin-top: 10px;
margin-right: 40px;
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 15px;
color: #151C4D;
`;


const ThirdSection = styled.div`
 display: flex;
 width: 500px;
 justify-content: space-between;
 padding: 20px 20px;
 margin-top:20px;

 ${media.phone} { 
  display: flex;
  flex-direction:row;
  padding: 20px 5px;
  width: 330px;
  margin-top:10px;
  
 }
`;


const UserProfilePhoto = styled.div`
 display:flex;
 border-radius:50%;
 border: 2px solid white;
 ${media.phone} { 
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin-top:-35px; 
  
}
`;
const UserProfilePhoto2 = styled.div`
 display: flex;
 margin-left:-7px;
 border-radius:50%;
 border: 2px solid white;
 ${media.phone} { 
  margin-top:-2px; 
  display: flex;
  flex-direction: row;
  
} 
`;


const PeoplePrayed = styled.div`
font-style: normal;
font-weight: 700;
font-size: 10px;
line-height: 13px;
color: #151C4D;
${media.phone} { 
  margin-top:-2px;
  display: flex;
  flex-direction: row;
  
}
`;


const PrayerIcon = styled.div`
${media.phone} { 
  margin-top:-20px;
  margin-left:150px;
 
}
`;


interface ISecondSlate {
    prayerIcon: any;
    userProfilePhoto: any;
    userProfilePhoto2: any;
    userName: string | number;
    prayerPoint: string;
    prayer: string;
    peoplePrayed: number;
    date: any;
    bg?:string;
  }
  const SecondSlate: FC<ISecondSlate> = ({ prayerIcon, userName, prayerPoint,
     prayer, peoplePrayed, date, bg, userProfilePhoto,  userProfilePhoto2}) => {
    return (
      <Container bg={bg}>
        <FirstSection>
            <UserName>{userName}</UserName>
            <Date>{date}</Date>
        </FirstSection>
        <SecondSection>
            <PrayerPoint>{prayerPoint}</PrayerPoint>
            <Prayer>{prayer}</Prayer>
        </SecondSection>
        <ThirdSection>
          <UserProfilePhoto>{userProfilePhoto}
          <UserProfilePhoto2>{userProfilePhoto2}</UserProfilePhoto2>
          <PeoplePrayed>{peoplePrayed} people prayed</PeoplePrayed>
          </UserProfilePhoto>          
          <PrayerIcon>{prayerIcon}</PrayerIcon>
        </ThirdSection>
       
      </Container>
    );
  };
  
  export default SecondSlate;