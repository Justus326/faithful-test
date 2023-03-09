import React from "react";
import PrimaryButton from "../../../../Components/Form/Buttons/PrimaryButton";
import CurrencyValueInput from "../../../../Components/Form/inputs/CurrencyValueInput";
import PrimarySelector from "../../../../Components/Form/inputs/PrimarySelector";
import { Label } from "../../../../Components/Form/inputs/styles";
import {
  AdsContainar,
  AdsContentContainer,
  AdsLeftContent,
  AdsRightContent,
  AdsRouteContainer,
} from "./style";

const Ads = () => {
  return (
    <AdsRouteContainer>
      <AdsContainar>
        <AdsContentContainer>
          <AdsLeftContent>
            <Label>Method of billing</Label>
            <PrimarySelector />
          </AdsLeftContent>
          <AdsRightContent>
            <Label>Set Price Per Click</Label>
            <CurrencyValueInput />
          </AdsRightContent>
        </AdsContentContainer>
        <PrimaryButton text="Save Changes" size="medium" />
      </AdsContainar>
    </AdsRouteContainer>
  );
};

export default Ads;
