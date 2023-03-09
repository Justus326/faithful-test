import React, { FC } from "react";
import styled from "styled-components";
import { theme } from "./../theme";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background: ${theme.colors.bgWhite};
  padding: 20px 0px;
`;

interface FormWrapperI {
  children: any;
}

const FormWrapper: FC<FormWrapperI> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default FormWrapper;
