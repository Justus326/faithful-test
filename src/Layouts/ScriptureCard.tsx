import React, { FC } from "react";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import styled from "styled-components";
import { theme } from "../theme";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 343px;
  height: 177px;
  background: ${theme.colors.bgWhite};
  filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.051));
  padding: 20px;
`;

const TopItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Date = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: ${theme.colors.secondaryColor};
`;
const Reading = styled.div`
  font-size: 10px;
  line-height: 12px;
  color: ${theme.colors.secondaryColor};
`;

const Scripture = styled.p`
  font-size: 12px;
  line-height: 14px;
  color: ${theme.colors.secondaryColor};
  margin-top: 10px;
`;

const BottonItems = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  svg {
    font-size: 18px;
    color: ${theme.colors.textGreycolor};
    cursor: pointer;
  }
`;

interface IScriptureCard {
  setAdd: any;
  setEdit: any;
}

const ScriptureCard: FC<IScriptureCard> = ({ setEdit, setAdd }) => {
  return (
    <Container>
      <TopItems>
        <Date>1 Jan 2020</Date>
        <Reading>Reading: John 3:16</Reading>
        <Scripture>
          For God so loved the world, as to give his only begotten Son; that
          whosoever believeth in him, may not perish, but may have life
          everlasting.
        </Scripture>
      </TopItems>
      <BottonItems>
        <FiEdit
          onClick={() => {
            setAdd(false);
            setEdit(true);
          }}
        />
        <RiDeleteBin6Line />
      </BottonItems>
    </Container>
  );
};

export default ScriptureCard;
