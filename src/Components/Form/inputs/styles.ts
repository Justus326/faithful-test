import styled from "styled-components";
import { theme } from "../../../theme";
import { media } from "./../../../Screens";

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid ${theme.colors.borderColor};
  justify-content: space-between;
  padding: 0 10px;
  width: 397px;
  height: 50px;
  background: ${theme.colors.bgWhite};
  border-radius: 4px;
  gap: 10px;

  &:focus {
    border: 1px solid ${theme.colors.primaryColor};
  }

  ${media.phone} {
    font-size: 14px;
    width: 300px;
    height: 45px;
  }

  svg {
    cursor: pointer;
  }
`;

export const FilePickerContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px dashed ${theme.colors.borderColor};
  justify-content: space-between;
  padding: 0 10px;
  width: 397px;
  height: 50px;
  background: ${theme.colors.bgWhite};
  border-radius: 4px;
  gap: 10px;

  &:focus {
    border: 1px solid ${theme.colors.primaryColor};
  }

  input {
    display: none;
  }

  label {
    background-color: ${theme.colors.bgBlack};
    padding: 10px 30px;
    width: auto;
    border-radius: 4px;
    color: ${theme.colors.textWhite};
    cursor: pointer;
  }

  ${media.phone} {
    font-size: 14px;
    width: 300px;
    height: 45px;
  }

  svg {
    cursor: pointer;
  }
`;
export const FileUploadContainer = styled.label`
  display: flex;
  align-items: center;
  jusitify-content: center;
  flex-direction: column;
  border: 1px dashed ${theme.colors.borderColor};
  padding: 10px;
  width: 204px;
  height: 166px;
  background: ${theme.colors.bgWhite};
  gap: 10px;
  cursor: pointer;

  input {
    display: none;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 82px;
    width: 82px;
    background: rgba(21, 28, 77, 0.1);
    border-radius: 50%;
  }

  label {
    color: ${theme.colors.secondaryColor};};
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 23px;
  }

  svg {
    cursor: pointer;
    color: ${theme.colors.bgBlack};
    font-size: 24px;
  }

  ${media.phone} {
    font-size: 14px;
    width: 300px;
    height: 45px;
  }
`;

export const InputText = styled.input`
  border: none;
  outline: none;
  height: 100%;
  flex-grow: 1;
  color: ${theme.colors.inputTextColor};}
  font-size: 16px;
  padding: 0;

`;

export const SelectorContainer = styled.div`
  display: flex;
  height: 23px;
  min-width: 140px;
  max-width: 170px;
  position: relative;
  align-items: center;
  justify-content: space-between;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 23px;
  color: ${theme.colors.secondaryColor};};
  cursor: pointer;

  ${media.phone}{
    font-size: 14px;
  }
`;
export const PrimarySelectorContainer = styled.div`
  display: flex;
  height: 51px;
  width: 201px;
  position: relative;
  align-items: center;
  justify-content: space-between;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: ${theme.colors.secondaryColor};
  cursor: pointer;
  border: 1px solid ${theme.colors.borderColor};
  padding: 0px 10px;
`;

export const SelectDropdown = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 30px;
  width: 200px;
  height: 300px;
  border-radius: 10px;
  background: ${theme.colors.bgWhite};
  padding: 20px 0;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  overflow: hidden;
  overflow-y: auto;
  z-index: 99;
`;

export const Option = styled.p`
  color: ${theme.colors.secondaryColor};};
  border-bottom: 1px solid ${theme.colors.borderprimaryColor};
  padding:0 10px;
  font-size: 14px;
`;

// currrency valie input
export const CurrencyValueInputContainer = styled.div`
  display: flex;
  align-items: center;
  height: 51px;
  width: 201px;
  border: 1px solid ${theme.colors.secondaryColor};
  position: relative;
  padding: 0;
  box-sizing: border-box;
`;

export const CurrencyField = styled.div`
  text-align: center;
  padding: 10px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: ${theme.colors.secondaryColor};
  border-right: 1px solid ${theme.colors.secondaryColor};
`;
export const ValueField = styled.input`
  text-align: center;
  padding: 10px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: ${theme.colors.secondaryColor};
  border: none;
  background: transparent;
  outline: none;
  width: 100%;
`;

export const Label = styled.label`
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: ${theme.colors.secondaryColor};
`;
