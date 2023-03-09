import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import styled from 'styled-components';
import { FaItunesNote } from "react-icons/fa";
import { media } from "./../../../../Screens";



const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
width: 100%;
margin-top:30px;
`;

const AudioCard = styled.div`
width:300px;
height:200px;
background-color: white;
display:flex;
flex-direction:column;
margin-left: -200px;
padding: 5px 5px;
${media.phone} {
    margin-left: 0px;   
    }
`;

const Caption = styled.div`
margin-top:30px;
font-style: normal;
font-weight: 400;
font-size: 13px;
line-height: 33px;
color: #151C4D;
`;

const Minister = styled.div`
margin-top:-15px;
font-style: normal;
font-weight: 400;
font-size: 11px;
line-height: 26px;
color: #151C4D;
`;

const FaItune = styled.div`
margin-left: 130px;
margin-top:40px;
`;


const AudioSermonCard = () => {
  return (
    <Container>
      <AudioCard>     

        <ReactAudioPlayer
         src="my_audio_file.ogg"
         autoPlay
         controls
         style={{width:100, height:30,}}
         className="reactaudioplayer"
        />
         <FaItune><FaItunesNote width={30} color="gray" fontSize={40} /></FaItune>
        <Caption>More than Gold</Caption>
        <Minister>Pst Emeka</Minister>
      </AudioCard>
    </Container>
  )
}

export default AudioSermonCard