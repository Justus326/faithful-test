import React from "react";
import {
  CurrencyField,
  ValueField,
  CurrencyValueInputContainer,
} from "./styles";

const CurrencyValueInput = () => {
  return (
    <CurrencyValueInputContainer>
      <CurrencyField>$</CurrencyField>
      <ValueField type="number" min="200" defaultValue={"200"} />
    </CurrencyValueInputContainer>
  );
};

export default CurrencyValueInput;
