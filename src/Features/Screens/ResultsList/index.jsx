import React from "react";
import { useSelector } from "react-redux";
import { StyledDiv } from "./Styled";
import CardList from "Features/Components/CardList";
const ResultsListPage = () => {
  const { eligiblecards } = useSelector((state) => state.accounts);

  return (
    <StyledDiv>
      <CardList
        txt="Based on your details you are eligible for the following cards:"
        cards={eligiblecards}
      />
    </StyledDiv>
  );
};

export default ResultsListPage;
