import styled from "styled-components";
import { theme } from "./../../theme";
import { media } from "./../../Screens";

export const TableContainer = styled.div`
  width: 100%;
  overflow: auto;
  margin-top: 30px;
  overflow-x: hidden;

  ${media.phone}{
    margin-top: 15px;
  }
`;
export const TableTitle = styled.div``;
export const Table = styled.table`
  width: 100%;
  border-top: 1px solid ${theme.colors.borderprimaryColor};
  margin-top: 20px;
  border-collapse: collapse;
  overflow-x: auto;
  position: relative;
`;
export const TableHeader = styled.thead``;
export const TableHead = styled.th`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 25px;
  color: ${theme.colors.secondaryColor};
  padding: 15px;

  ${media.phone} {
    font-size: 12px;
    padding: 5px;
  }
`;
export const TableRow = styled.tr`
  border-bottom: 0.5px solid rgba(1, 192, 146, 0.2);
`;
export const TableBody = styled.tbody`
  background-color: ${theme.colors.bgWhite};
  //   border: none;
`;
export const TableData = styled.td`
  padding: 15px;
  text-align: center;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 23px;
  color: ${theme.colors.secondaryColor};

  ${media.phone} {
    font-size: 12px;
    padding: 10px;
  }
`;
