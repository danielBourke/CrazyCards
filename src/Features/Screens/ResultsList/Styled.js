import styled from "styled-components";
export const StyledDiv = styled.div`
  margin-left: auto;
  margin-right: auto;
  background-color: white;
  height: 100vh;
  padding: 20px;

  @media (min-width: 600px) {
    margin-left: auto;
    margin-right: auto;
    margin-top: 0;
    background-color: white;
    max-width: 1800px;
  }
`;

export const Title = styled.h1`
  font-size: 25px;
  font-weight: 200;
`;
