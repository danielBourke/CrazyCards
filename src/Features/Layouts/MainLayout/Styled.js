import styled from "styled-components";

export const StyledLayout = styled.div`
  width: 100%;
  display: flex;
  height: 100vh;

  flex-direction: column;
  justify-content: center;
  align-content: flex-start;
  background-color: #ebebeb;
`;

export const StyledTopbarWrapper = styled.div`
  min-width: 100vw;
  height: 75px;
  display: flex;
  z-index: 200000;
  top: 0;
  background-color: white;
  align-content: center;
  justify-content: "center";
`;
export const StyledTopbarInnerWrapper = styled.div`
  width: 100%;
  display: flex;
  height: 75px;
  z-index: 200000;
  align-content: center;

  @media (min-width: 800px) {
    margin-top: 0;
    max-width: 75vw;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: auto;
  }
`;

export const StyledInnderWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 800px) {
    margin-top: 0;
    max-width: 75vw;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: auto;
  }
`;
