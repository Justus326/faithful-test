import React from "react";
import CurrencyValueInput from "../Form/inputs/CurrencyValueInput";
import { FlexRow, SubSearchBoxContainer, SubSearchTitle } from "./style";

const SubSearchBox = () => {
  return (
    <SubSearchBoxContainer>
      <FlexRow>
        <SubSearchTitle>Monthly subscription </SubSearchTitle>
        <CurrencyValueInput />
      </FlexRow>
      <FlexRow>
        <SubSearchTitle>Yearly subscription </SubSearchTitle>
        <CurrencyValueInput />
      </FlexRow>
    </SubSearchBoxContainer>
  );
};

export default SubSearchBox;
