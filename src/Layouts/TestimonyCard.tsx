import React, { FC } from "react";
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
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  margin-left:40px;
  color: ${theme.colors.secondaryColor};
`;
const User = styled.div`
font-style: normal;
font-weight: 400;
font-size: 15px;
line-height: 25px;
color: #151C4D;
margin-left:40px;

`;

const Reading = styled.div`
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 18px;
color: #151C4D;
`;


const BottomSection = styled.div`
display: flex;
justify-content: space-between;
margin-top: 10px;
`;


const ReplyIcon = styled.div`
color:#716172;
`;






interface ITestimonyCard {
  setAdd: any;
  setEdit: any;
  user: string;
  date:any;  
  reading: string; 
  replyIcon: any;
}

const TestimonyCard: FC<ITestimonyCard> = ({  user, date,  reading , replyIcon }) => {
  return (
    <Container >
      <TopItems>
        <User>{user}</User>
        <Date>{date}</Date>
        </TopItems>
        
        <Reading>{reading}</Reading>
         <BottomSection>
                   
          <ReplyIcon>{replyIcon}</ReplyIcon>
         </BottomSection>
    </Container>
  );
};

export default TestimonyCard;
