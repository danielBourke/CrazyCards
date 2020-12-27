import React from "react";
import CardItem from "../CardItem";
import { StyledDiv, Title } from "./Styled";
const CardList = ({cards, txt}) => {


  return (
    <StyledDiv>
      <Title>
        {txt}
      </Title>
      {cards &&
        cards.map((card, i) => {
          return <CardItem key={i} card={card} />;
        })}
    </StyledDiv>
  );
};

export default CardList;
