import styled from "styled-components";
export const CardWrapper = styled.div`
  border: 1px solid grey;
  border-radius: 20px;
  padding: 20px;
  margin-bottom: 20px;
  width: 85%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
`;

export const CardWrapperInner = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 950px) {
    flex-direction: row;
  }
`;

export const Title = styled.h3`
  font-size: 35px;
  font-weight: 200;
`;

export const ItemWrapper = styled.h1`
  text-align: center;
  margin-left: 20px;
  margin-right: 20px;
  display: flex;
  flex-direction: column;
`;

export const SubHeader = styled.h1`
  font-size: 25px;
  font-weight: 200;
`;
