import { Divider } from "@material-ui/core";
import React from "react";
import {
  CardWrapper,
  CardWrapperInner,
  ItemWrapper,
  Title,
  SubHeader,
} from "./Styled";

const CardItem = ({ card }) => {
  return (
    <CardWrapper>
      <Title>{card.title} </Title>
      <CardWrapperInner>
        <img style={{ maxWidth: "100%" }} src={card.img} alt={card.title} />
        <ItemWrapper>
          <SubHeader>Transfer</SubHeader>
          <SubHeader>{card.Transfer}</SubHeader>
        </ItemWrapper>
        <Divider orientation="vertical" flexItem />
        <ItemWrapper>
          <SubHeader>
            Representative % <br />
            APR (variable)
          </SubHeader>

          <SubHeader>{card.Apr}</SubHeader>
        </ItemWrapper>
        <Divider orientation="vertical" flexItem />
        <ItemWrapper>
          <SubHeader>
            {" "}
            Max Credit <br /> Limit
          </SubHeader>
          <SubHeader> £{card.credit} </SubHeader>
        </ItemWrapper>
        <Divider orientation="vertical" flexItem />
        <ItemWrapper>
          <SubHeader>
            {" "}
            Purchase Offer <br /> Duration
          </SubHeader>
          <SubHeader> {card.PurchaseOfferDuration} </SubHeader>
        </ItemWrapper>
      </CardWrapperInner>
    </CardWrapper>
  );
};
export default CardItem;
