import React, {FC} from "react";
import styled from "styled-components";

const Container = styled.div`
  padding-top: 100px;
`;

interface IRouteWrappper {
  children?: any;
}

const RouteWrapper: FC<IRouteWrappper> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default RouteWrapper;
