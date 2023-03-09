import { useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
import { PrimarySelectorContainer, SelectDropdown, Option } from "./styles";

const PrimarySelector = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <PrimarySelectorContainer onClick={() => setShowDropdown(!showDropdown)}>
      <div>Sort By Church</div>
      <MdArrowDropDown />
      {showDropdown && (
        <SelectDropdown>
          <Option>Hills</Option>
        </SelectDropdown>
      )}
    </PrimarySelectorContainer>
  );
};

export default PrimarySelector;
