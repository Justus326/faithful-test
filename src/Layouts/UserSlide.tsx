
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styled from "styled-components";
import UserSlideContent from "./UserSlideContent";


const Frame = styled.div`
 width:100%;
`;

 const  UserSlide = () => {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 2
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 2
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

  return (
    <Frame>
      <Carousel responsive={responsive} showDots={true} arrows={false} 
        autoPlay={ true } swipeable={false}>
         <UserSlideContent />
         <UserSlideContent />
         <UserSlideContent />
         <UserSlideContent />
         <UserSlideContent />
         <UserSlideContent />
         <UserSlideContent />
         <UserSlideContent />        
         
     </Carousel>
    </Frame>
  );
}
export default UserSlide