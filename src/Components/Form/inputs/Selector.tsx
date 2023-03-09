import React, { useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
import { SelectorContainer, SelectDropdown, Option } from "./styles";

const Selector = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <SelectorContainer onClick={() => setShowDropdown(!showDropdown)}>
      <div>Sort By Church</div>
      <MdArrowDropDown />
      {showDropdown && (
        <SelectDropdown>
          <Option>Hills</Option>
        </SelectDropdown>
      )}
    </SelectorContainer>
  );
};

export default Selector;
