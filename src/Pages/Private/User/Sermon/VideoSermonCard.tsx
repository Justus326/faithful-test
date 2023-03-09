import React from 'react'
import { VideoSermonContainer, VideoSermonGlass, VideoWrap, PlayerContainer, VideoDetail,
    VideoCaption, VideoAuthor, Player,} from './styles';
    import ReactPlayer from 'react-player';

const VideoSermonCard = () => {
  return (
    <>
     <VideoSermonGlass>  
    <VideoWrap>
    <PlayerContainer>
    <VideoDetail>
        <VideoCaption>More than Gold</VideoCaption>
        <VideoAuthor>Pst Emeka</VideoAuthor>       
      </VideoDetail>
      <Player>
     <ReactPlayer controls={true} playing={true}  url="nmkkugfyo"
      width={300} height={140} light={<img src='' />}
      
     />
     </Player>
    </PlayerContainer>
    </VideoWrap>
    </VideoSermonGlass>
    </>
  )
}

export default VideoSermonCard