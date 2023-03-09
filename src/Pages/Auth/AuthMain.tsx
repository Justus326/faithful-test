import { FC } from "react";
import {
  AuthPageContainer,
  AuthPageRightContent,
  AuthPageLeftContent,
  AuthPageImage,
  RightContentWrapper,
} from "./style";

interface AuthMainI {
  children: any;
  placeItemsCenter?: boolean;
  customPadding?: string;
}

const AuthMain: FC<AuthMainI> = ({
  children,
  placeItemsCenter,
  customPadding,
}) => {
  return (
    <AuthPageContainer>
      <AuthPageLeftContent>
        <AuthPageImage src="/assets/images/png/authimg.png" />
      </AuthPageLeftContent>
      <AuthPageRightContent customPadding={customPadding}>
        <RightContentWrapper className={placeItemsCenter ? "place-center" : ""}>
          {children}
        </RightContentWrapper>
      </AuthPageRightContent>
    </AuthPageContainer>
  );
};

export default AuthMain;
