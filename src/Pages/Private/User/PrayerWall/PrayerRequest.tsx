import React, { useState } from "react";
import Button from "./Button";
import RouteWrapper from "../../../../Layouts/RouteWrapper";
import PrayerRequestCard from "../../../../Layouts/PrayerRequestCard";
import AddRequest from "./AddRequest";
// import EditScripture from "./EditScripture";
import { DailyScripturesContainer, PrayerRequestContainer} from "./style";

const PrayerRequest = () => {
    const [showAdd, setShowAdd] = useState(false);
    const [showEdit, setShowEdit] = useState(false);

  return (
    <RouteWrapper>
      <DailyScripturesContainer>
      <Button
          text="Add a Prayer"
          size="medium"
          handleClick={() => {
            setShowAdd(true);
            setShowEdit(false);
          }}
        />
       
       {showAdd && !showEdit && <AddRequest setState={setShowAdd} />}
        {/* {showEdit && !showAdd && <EditScripture setState={setShowEdit} />} */}
        <PrayerRequestContainer>
          <PrayerRequestCard
           user="Bismark Achodo"
           date="2d"
           prayerPoint="Prayer for Help"
           reading="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings."
           userProfilePhoto={<img src='assets/images/img1.png' alt='userPhoto' width={25} height={25} /> }
           userProfilePhoto2={ <img src='assets/images/img3.png' alt='userPhoto' width={25} height={25}  />}
           peoplePrayed={16}
           prayerIcon={<img src="assets/images/prayicon.png" />}
           setEdit={setShowEdit} setAdd={setShowAdd}
          />
          <PrayerRequestCard
           user="Bismark Achodo"
           date="2d"
           prayerPoint="Prayer for Help"
           reading="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings."
           userProfilePhoto={<img src='assets/images/img1.png' alt='userPhoto' width={25} height={25} /> }
           userProfilePhoto2={ <img src='assets/images/img3.png' alt='userPhoto' width={25} height={25}  />}
           peoplePrayed={16}
           prayerIcon={<img src="assets/images/prayicon.png" />}
           setEdit={setShowEdit} setAdd={setShowAdd}
          />
          <PrayerRequestCard
           user="Bismark Achodo"
           date="2d"
           prayerPoint="Prayer for Help"
           reading="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings."
           userProfilePhoto={<img src='assets/images/img1.png' alt='userPhoto' width={25} height={25} /> }
           userProfilePhoto2={ <img src='assets/images/img3.png' alt='userPhoto' width={25} height={25}  />}
           peoplePrayed={16}
           prayerIcon={<img src="assets/images/prayicon.png" />}
           setEdit={setShowEdit} setAdd={setShowAdd}
          />
          <PrayerRequestCard
           user="Bismark Achodo"
           date="2d"
           prayerPoint="Prayer for Help"
           reading="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings."
           userProfilePhoto={<img src='assets/images/img1.png' alt='userPhoto' width={25} height={25} /> }
           userProfilePhoto2={ <img src='assets/images/img3.png' alt='userPhoto' width={25} height={25}  />}
           peoplePrayed={16}
           prayerIcon={<img src="assets/images/prayicon.png" />}
           setEdit={setShowEdit} setAdd={setShowAdd}
          />
          
        </PrayerRequestContainer>
      </DailyScripturesContainer>
    </RouteWrapper>
  );
};

export default PrayerRequest;
