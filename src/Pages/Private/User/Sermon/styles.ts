import styled from "styled-components";
import { theme } from "../../../../theme";
import { media } from "./../../../../Screens";


export const IndexContainer = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 width: 100%;
 ${media.phone} {
  
  overflow:hidden;  
}

`;

export const InnerHeaderContainer = styled.div`
  display: flex;
  justify-content: center; 
  align-items: center;
  height: 30px;  
  width: 60%;
  margin-left:-20%;  
  padding: 0 50px;  
  gap: 30px;
  // position: absolute;
  margin-top: 4%;
  left: 0;
  border-bottom:1px solid;
  ${media.phone} {
    margin-left:30px;   
  }
`;

export const InnerNavlink = styled.div`
  display: flex;  
  justify-content: center;
  align-items: flex-end;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 23px;
  color: ${theme.colors.secondaryColor};
  cursor: pointer;
  text-decoration: none;
  position: relative;
  width: auto;
  height: 100%;
  text-align: center;
  padding: 10px;
  
  &.active {
    color: ${theme.colors.primaryColor};};
  }

  // &.active::after {
  //   content: "";
  //   background: ${theme.colors.primaryColor};
  //   width: 100%;
  //   height: 4px;
  //   position: absolute;
  //   bottom: 0;
  //   left: 0;
  // }

  ${media.phone} {
    font-size: 16px;
    padding-bottom: 10px;
  }
`;

export const VideoWrap = styled.div`
 width:100%;
 heigh:200px; 
 display:flex;
 justify-content: center;
 align-items: center;
 margin-top: 20px;
`;

export const PlayerContainer = styled.div`
margin-left: -20%;
margin-top:5px;
width:370px;
height:200px;
background: #FFFFFF;
${media.phone} {
  width:300px; 
  margin-left: 0px;
  margin-bottom:20px;
  }
`;

export const Player = styled.div`
margin-left: 10%;
margin-top: -50%;
${media.phone} {
  margin-top: -60%;
  }
`;

export const Prompt = styled.div`
font-style: normal;
font-weight: 400;
font-size: 17px;
line-height: 25px;
color: #B603C9;
display: flex;
margin-left: -24%;
`;

export const VideoGlass = styled.div`

display: flex;
width:100%;
flex-direction: column;
justify-content: center;
align-items:center;
`;
export const VideoDetail = styled.div`
 display:flex;
 flex-direction: column;
 justify-content: center; 
 width:70px;
//  position: absolute;
 margin-left: 2%;
 margin-top: 40%;
`;
export const VideoCaption = styled.div`
font-style: normal;
font-weight: 400;
font-size: 10px;
line-height: 15px;
color: #151C4D;
${media.phone} {
  margin-top:30px;
  }
`;
export const VideoAuthor = styled.div`
font-style: normal;
font-weight: 400;
font-size: 8px;
line-height: 13px;
color: #151C4D;
margin-bottom:5px;
`;

export const EventNote = styled.div`
   background: #B603C9;
   display: flex;
   flex-direction:column;
   justify-content:center;
   align-items:center;
   width:174px;
   height:174px;
   box-shadow:.5px 2px 1px .5px rgba(0, 0, 0, 0.2);
   position:absolute;
   margin-left: 760px;
   margin-top: -175%;
   padding:40px 30px;
   border-radius:5px;
   ${media.phone} {
    display: none; 
    }
    
`;


export const EventCaption = styled.div`
 display: flex;
 gap:5px;
 margin-top: -20px;
`;


export const EventIcon = styled.div`
font-style: normal;
font-weight: 400;
font-size: 15px;
line-height: 15px;
color: #FFFFFF;
`;


export const EventTopic = styled.div`
font-style: normal;
font-weight: 400;
font-size: 7px;
line-height: 15px;
color: #FFFFFF;
`;


export const Activity = styled.div`
margin-top: 10px;
border-bottom:1px solid white;
width: 100%;
`;


export const EventName = styled.div`
font-style: normal;
font-weight: 400;
font-size: 7px;
line-height: 15px;
color: #FFFFFF;
`;


export const EventDate = styled.div`
font-style: normal;
font-weight: 400;
font-size: 7px;
line-height: 15px;
color: #FFFFFF;
`;
export const Sponsor = styled.div`
position:absolute;
margin-left: 640px;
margin-top: -156%;
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 15px;
color: #151C4D;
${media.phone} {
  display: none; 
  }
`;

export const AdText = styled.div`
position: absolute;
margin-left: 650px;
color:white;
cursor: pointer;
z-index:1000;
font-size: 10px;
margin-top: -150%;
${media.phone} {
  display: none; 
  }
`;

export const VideoSermonContainer = styled.div`
display:flex;
flex-direction:column;
justify-content: center;
align-items: center;
width:100%;
div.ad {
  position:absolute;
  margin-left: 800px;
  margin-top: -1170px;
  border:2px solid ;    
  height:173px;
  width:173px;
  border-radius: 5%;
  ${media.phone} {
    display: none; 
    }
  }
  ${media.phone} {
    margin-left: -30px; 
    overflow: hidden;
    }
`;

export const VideoSermonEventNote = styled.div`
background: #B603C9;
display: flex;
flex-direction:column;
justify-content:center;
align-items:center;
width:174px;
height:174px;
box-shadow:.5px 2px 1px .5px rgba(0, 0, 0, 0.2);
position:absolute;
margin-left: 800px;
margin-top: -1600px;
padding:40px 30px;
border-radius:5px;
${media.phone} {
 display: none; 
 }
 
`;
export const VideoAdText = styled.div`
position: absolute;
margin-left: 690px;
color:white;
cursor: pointer;
z-index:1000;
font-size: 10px;
margin-top: -1320px;
${media.phone} {
  display: none; 
  }
`;
export const VideoSermonGlass = styled.div`
margin-left: -130px;
display:flex;
${media.phone} {
  margin-left:40px;
  width: 
  }
`;
export const VideoSponsor = styled.div`
position:absolute;
margin-left: 690px;
margin-top: -1390px;
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 15px;
color: #151C4D;
`;

export const AudioSermonContainer = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top:10px;

div.ad {
  position:absolute;
  margin-left: 800px;
  margin-top: -1170px;
  border:2px solid ;    
  height:173px;
  width:173px;
  border-radius: 5%;

  ${media.phone} {
    display: none; 
    }
`;

