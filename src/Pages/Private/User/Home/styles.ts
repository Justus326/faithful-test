import styled from "styled-components";
import { theme } from "./../../../../theme";
import { media } from "./../../../../Screens";


export const Container = styled.div`
  display: flex;
  justify-content:center;
  flex-direction: column; 
  align-items:center; 
  ${media.phone} {
    overflow:hidden;
  }  
   div.avatar{
    position:absolute;
    margin-left:800px;
    margin-top: -60%;
    border-radius:10px; 
    ${media.phone} {
      display:none;
    }   
   }
 
`;

export const Date = styled.div`
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 35px;
margin-left: -200px;
color: ${theme.colors.secondaryColor};
${media.phone} {
  margin-left: 0px;
  font-size: 20px;
}
}
  `;

export const WelcomeText = styled.div`
font-style: normal;
font-weight: 350;
font-size: 40px;
line-height: 60px;
margin-left: -120px;
color: ${theme.colors.secondaryColor};
${media.phone} {
  margin-left: 30px;
  font-size: 35px;
}
`;

export const AdAvatar = styled.div`
position: absolute;
left: 76.72%;
right: 7.55%;
top: 30%;
bottom: 59.51%;
boder: 2px solid;
border-radius: 20%;
${media.phone} {
  display:none;
  margin-left: 5px;
  font-size: 10px;
  width:20px;
  height:20px;
  opcacity:0;
}

`;



export const SlideContainer = styled.div`
display: flex;
justify-content: space-between:
border: 1px solid black;
height:200px;
width:500px;
gap: 30px;
margin-left:-120px;
margin-top:150px;
${media.phone} {
  margin-left:200px;
  margin-top:100px;
  
  }
`;

export const FirstSlate = styled.div`
display:flex;
flex-direction:column;
justify-contents:center;
height:250px;
width:500px;
background-color: #FFFFFF;
margin-left:-120px;
margin-top:100px;
box-shadow: rgba(0, 0, 0, 0.20) 0.5px 1px 4px 1px;

${media.phone} {
  margin-left:5px;
  margin-top:40px;
  width:340px;
`;

export const SlateChildCenter = styled.div`
display:flex;
height:50px;
width:400px;
margin-left:50px;
background: #B603C9;
opacity: 0.46;
margin-top:20px;

${media.phone} {
  margin-left:10px;
  margin-top:20px;
  width:320px;
`;

export const FirstChildCenterBibleVerse = styled.div`

font-family: 'Great Vibes', cursive;
margin-left:150px;
width: 100px;
margin-top: 22px;
font-size: 24px;
font-weight:300px;
color: #FFFFFF;
${media.phone} {
  margin-left:100px;
;
`;

export const FirstChildCenterBibleChapter = styled.div`

margin-left: -40px;
margin-top: 20px;
font-size:10px;
color: #FFFFFF;
`;

export const SlateChildEnd = styled.div`
height:50px;
width:119px;
background: #B603C9;
opacity: 0.46;
margin-top:30px;
margin-left:280px;

${media.phone} {
  margin-left:190px;
  margin-top:20px;
}
`;

export const SlateChildLast = styled.div`
width:px;
height:47%;
padding:20px;
${media.phone} {
  padding:5px;
  font-weight: 200;
  font-size: 9px;
}
`;

export const Quote = styled.div`
margin-top: 0px;
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 16px;
color: #151C4D;
`;

export const BibleChapter = styled.div`
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 11px;
color: #151C4D;
margin-top: 10px;
`;

export const BibleVerse = styled.div`
font-family: 'Mulish';
font-style: normal;
font-weight: 400;
font-size: 15px;
line-height: 15px;
color: #151C4D;
margin-top: 15px;
${media.phone} {
  margin-left:5px;
  width:300px;
`;

 export const SecondSlateWrapper = styled.div`
 width: 625px;
 height:660px;
//  margin-left: 200px;
 margin-top: 50px; 
 ${media.phone} {
  display:flex;
  flex-direction: column;
  justify-content: center;
  margin-left: -55px;
  width:340px;
 `;





