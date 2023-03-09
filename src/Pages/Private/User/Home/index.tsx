import React from 'react';
import 'react-multi-carousel/lib/styles.css';
import UserSlide from '../../../../Layouts/UserSlide';
import SecondSlate from './SecondSlate';
import { AiOutlineRead } from "react-icons/ai";


import 
{ Container, Date, WelcomeText, SlideContainer, FirstSlate, SlateChildCenter,
  SlateChildEnd, SlateChildLast, Quote, BibleChapter, BibleVerse,
  FirstChildCenterBibleVerse, FirstChildCenterBibleChapter, SecondSlateWrapper, AdAvatar } from './styles';

  
  
 


const index = () => {
  

  return (
    <Container>
     <Date>Tuesday, October 13</Date>
      <WelcomeText>Welcome,Bismark</WelcomeText>
      <div className='avatar'>
        <img src="assets/images/ads.png" alt='Ad' width={150}  height={150} />
      </div>
      <SlideContainer>
       <UserSlide />
      </SlideContainer>

      <FirstSlate>
        <SlateChildCenter>
          <FirstChildCenterBibleVerse>
            For God so Loved the World
          </FirstChildCenterBibleVerse>
          <FirstChildCenterBibleChapter>
            John 3: 16 KJV
          </FirstChildCenterBibleChapter>
        </SlateChildCenter>
        <SlateChildEnd></SlateChildEnd>
        <SlateChildLast>
          <Quote>Todays Verse</Quote>
          <BibleChapter>John 3: 16 KJV</BibleChapter>
          <BibleVerse>For God so loved the world, as to give his 
            only begotten Son; that whosoever believeth in him, may
             not perish, but may have life everlasting.
          </BibleVerse>
        </SlateChildLast>
      </FirstSlate>

      <SecondSlateWrapper>
        <SecondSlate 
        userName={"Bismark Achodo"}
        date={"12/09/2020"}

        prayerPoint={"Prayer for Help"}

        prayer={"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings."}

        userProfilePhoto={
          <img src='assets/images/img1.png' alt='userPhoto' width={25} height={25}  />
        } 

        userProfilePhoto2={
          <img src='assets/images/img3.png' alt='userPhoto' width={25} height={25}  />
        } 

        peoplePrayed={16}

        prayerIcon={<img src="assets/images/prayicon.png" />}
        />


        <SecondSlate 
        userName={"Bismark Achodo"}
        date={"12/09/2020"}

        prayerPoint={"Prayer for Help"}

        prayer={"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings."}

        userProfilePhoto={
          <img src='assets/images/img1.png' alt='userPhoto' width={25} height={25}  />
        } 

        userProfilePhoto2={
          <img src='assets/images/img3.png' alt='userPhoto' width={25} height={25}  />
        } 

        peoplePrayed={16}

        prayerIcon={<img src="assets/images/prayicon.png" />}
        />


        <SecondSlate 
        userName={"Bismark Achodo"}
        date={"12/09/2020"}

        prayerPoint={"Prayer for Help"}

        prayer={"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings."}

        userProfilePhoto={
          <img src='assets/images/img1.png' alt='userPhoto' width={25} height={25}  />
        } 

        userProfilePhoto2={
          <img src='assets/images/img3.png' alt='userPhoto' width={25} height={25}  />
        } 

        peoplePrayed={16}

        prayerIcon={<img src="assets/images/prayicon.png" />}
        />
      </SecondSlateWrapper>
     
    </Container>
  )
}

export default index;