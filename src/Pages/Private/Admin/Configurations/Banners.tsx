import React from "react";
import FileUpload from "../../../../Components/Form/inputs/FileUpload";
import { AdsContainar, AdsRouteContainer } from "./style";
import PrimaryButton from "./../../../../Components/Form/Buttons/PrimaryButton";

const Banners = () => {
  return (
    <AdsRouteContainer>
      <AdsContainar>
        <div
          style={{
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <FileUpload text="Upload image" />
          <PrimaryButton text="Save Changes" size="medium" />
        </div>
      </AdsContainar>
    </AdsRouteContainer>
  );
};

export default Banners;
