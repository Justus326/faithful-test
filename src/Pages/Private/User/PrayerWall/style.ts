import styled from "styled-components";
import { theme } from "../../../../theme";
import { media } from "./../../../../Screens";

export const AdsRouteContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  
`;

export const AdsContainar = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin-left:-18%;  
  width: 520px;
  min-height: 300px;
  background: #fcf9f9;  
  padding: 30px;
  ${media.phone} {
    display:flex;
    justify-content:center;
    align-items:center;
    margin-left:10px;
    width: 340px;
  }

  div.selectContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;

    ${media.phone} {
       
      }
  }
`;

export const AdsContainerCaption = styled.div`
font-style: normal;
font-weight: 400;
font-size: 30px;
line-height: 38px;
color: #B603C9;
width: 100%;
display:flex;
justify-content: center;
${media.phone} {
display:flex;
font-weight: 400;
font-size: 20px;     
}
`;

export const AdsContentContainer = styled.div`
  display: flex;
  align-items: center;
  // justify-content: space-around;
  gap: 70px;
`;

export const DailyScripturesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  margin-top: -20px;

  div.ad {
    position:absolute;
    margin-left: 700px;
    margin-top: 220px;
    border:2px solid ;    
    height:173px;
    width:173px;
    border-radius: 5%;

    ${media.phone} {
      display: none; 
      }
`;
export const EventNote = styled.div`
   background: #B603C9;
   display: flex;
   flex-direction:column;
   justify-content:center;
   align-items:center;
   width:174px;
   height:174px;
   position:absolute;
   margin-left: 700px;
   margin-top: -20px;
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
margin-left: 600px;
margin-top: 180px;
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 15px;
color: #151C4D;
`;

export const AdText = styled.div`
position: absolute;
margin-left: 600px;
color:white;
cursor: pointer;
z-index:1000;
margin-top: 220px;
${media.phone} {
  display: none; 
  }
`;

export const PrayerRequestContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: -20%;
  margin-top: -20px;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  gap: 20px;
`;
export const TestimonyContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: -20%;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  gap: 20px;
`;

export const InnerHeaderContainer = styled.div`
  display: flex;
  justify-content: center; 
  align-items: center;
  height: 70px;  
  width: 80%;
  padding: 0 50px;  
  gap: 30px;
  position: absolute;
  top: 0;
  left: 0;
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

  &.active::after {
    content: "";
    background: ${theme.colors.primaryColor};
    width: 100%;
    height: 4px;
    position: absolute;
    bottom: 0;
    left: 0;
  }

  ${media.phone} {
    font-size: 16px;
    padding-bottom: 10px;
  }
`;

interface buttonI {
    outlined?: boolean;
    size?: string;
  }
  
  export const ButtonContainer = styled.button<buttonI>`
    outline: none;
    margin-left:-20%;   
    background: ${(props) =>
      props.outlined ? theme.colors.bgWhite : theme.colors.primaryColor};
    width: ${(props) =>
      props.size === "small"
        ? "100px"
        : props.size === "medium"
        ? "100px"
        : "200px"};
    height: 30px;
    color: ${(props) =>
      props.outlined ? theme.colors.primaryColor : theme.colors.textWhite};
    border-radius: 5px;
    font-style: normal;    
    font-weight: 400;
    font-size: 11px;
    cursor: pointer;
    border: ${(props) =>
      props.outlined ? `2px solid ${theme.colors.primaryColor}` : "none"};
    ${media.phone} {
      font-size: 10px;
      width: 70px;
      height: 30px;
      margin-left:0%;
      padding:5px;
    }
  
    &:focus {
      outline: 1px solid ${theme.colors.primaryColor};
    }
  `;

  export const Form = styled.div`
  width:50px;
  height:30px;
 
  `;
  
  export const InputContainer = styled.div`
     display: flex;
     margin-top:70px;
//   align-items: center;
//   border: 1px solid ${theme.colors.borderColor};
//   justify-content: center;
//   padding: 0 10px;
     width: 300px;
     height: 50px;
//   background: ${theme.colors.bgWhite};    
//   gap: 10px;

//   &:focus {
//     border: 1px solid ${theme.colors.primaryColor};
//   }
`;
export const InputText = styled.input`  
  border:none;
  width:200%;
  color: ${theme.colors.inputTextColor};}
  font-size: 16px;  
  box-shadow: .5px .5px 0px 2px rgba(0, 0, 0, .2);
  padding: 0;
  border-radius: 5px;

  ${media.phone} {
    width:96%;
    margin-left:7px;   
  }

`;

export const TestimonyInstructionContainer = styled.div`
display: flex;
justify-content:center;
gap: 10px;
margin-bottom:20px;
`;


export const TestimonyInstruction = styled.div`
font-style: normal;
font-weight: 400;
font-size: 10px;
line-height: 15px;
color: #151C4D;
`;

export const DailyPrayer = styled.div`
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 20px;
color: #B603C9;
margin-left: -43%;
${media.phone} {  
  margin-left:-25%;   
}
`;