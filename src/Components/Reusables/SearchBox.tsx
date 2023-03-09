import React from "react";
import { RiSearchLine } from "react-icons/ri";
import Selector from "../Form/inputs/Selector";
import TextInput from "../Form/inputs/TextInput";
import { SelectBoxContainer } from "./style";

const SearchBox = () => {
  return (
    <SelectBoxContainer>
      <Selector />
      <TextInput placeholder={"Search"} leftIcon={<RiSearchLine />} />
    </SelectBoxContainer>
  );
};

export default SearchBox;
