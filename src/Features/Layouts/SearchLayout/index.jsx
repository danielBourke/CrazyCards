import React from "react";
import {
  StyledLayout,
} from "./Styled";

const SearchLayout = ({ children }) => {
  return (
    <>
      <StyledLayout>
        <main>{children}</main>
      </StyledLayout>
    </>
  );
};

export default SearchLayout;