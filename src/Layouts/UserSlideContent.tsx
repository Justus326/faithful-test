import React from 'react';
import { media } from "./../Screens";
import styled from 'styled-components';

const Slide = styled.div`
display:flex;
flex-direction:column;
width: 90%;
height:200px;
background-color: #FFFFFF;
padding-left: 20px;
margin-bottom:30px;
box-shadow: rgba(0, 0, 0, 0.20) 0.5px 1px 4px 1px;
${media.phone} {
  width: 60%; 
}
`;

const Quote = styled.div`
 margin-top: 72%;
 font-style: normal;
 font-weight: 400;
 font-size: 13px;
 line-height: 20px;
 color: #151C4D;
 ${media.phone} {
  margin-top: 50%;
 }
`;

const Minister = styled.div`
margin-top: 2%;
font-style: normal;
font-weight: 400;
font-size: 10px;
line-height: 13px;
color: #151C4D;
`;

const UserSlideContent = () => {
  return (
    <>
       <Slide>
        <Quote>More than Gold</Quote>
        <Minister>Pst Emeka</Minister>
       </Slide>
    </>
  )
}

export default UserSlideContent