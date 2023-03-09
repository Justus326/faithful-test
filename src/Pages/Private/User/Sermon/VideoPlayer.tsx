import React from 'react';
import ReactPlayer from 'react-player'
import {PlayerContainer, VideoWrap, Prompt, VideoGlass, Player, VideoDetail,
  VideoCaption, VideoAuthor } from './styles';
import {FaShareAlt } from "react-icons/fa";

const VideoPlayer = () => {
  return (
    <VideoGlass>      
    <Prompt>Continue from where you stopped</Prompt>
    <VideoWrap>
    <PlayerContainer>
    <VideoDetail>
        <VideoCaption>More than Gold</VideoCaption>
        <VideoAuthor>Pst Emeka</VideoAuthor>
        <FaShareAlt color='#B603C9' fontSize={10} />
      </VideoDetail>
      <Player>
     <ReactPlayer controls={true} playing={true}  url="nmkkugfyo"
      width={300} height={140} light={<img src='' />}
      
     />
     </Player>
    </PlayerContainer>
    </VideoWrap>
    </VideoGlass>
   
  )
}

export default VideoPlayer