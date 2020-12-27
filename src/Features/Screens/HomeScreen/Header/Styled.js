import styled from "styled-components";
import hero_background from "app/assets/hero_background.png"
export const HeaderWrapper = styled.div`
  background-color: #1d007a;
  height: 100%;
  min-height: 65vh;
  display: flex;
  background-image: url(${hero_background});
  background-size: cover;
  background-position: center;
  flex-direction: column;
  max-width: 2150px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  
  @media (min-width: 950px)  {
    flex-direction: row;
    margin-bottom: auto;
    margin-top: 0;
  }
`;

export const HeaderItemWrapper = styled.div`
  width: 100vw;
  padding: 20; 
 
  width: 100%;
    display: flex;
    align-content: center;
    flex-direction: column;
    padding: 20; 

`;

export const HeaderInfoSection = styled.div`
  max-width: 100%;
  color: white;
  margin: auto; 
  text-align: center;
  @media (min-width: 950px)  {
   margin: auto; 
   max-width: 50%;
   color: white;
   text-align: left;
  }
`;

export const ButtonSection = styled.div`
  max-width: 50%;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  @media (min-width: 950px)  {
text-align: center;
   max-width: 50%;
   color: white;
   margin-left: 0;
  }
`;

export const HeaderOneTxt = styled.h1`
  color: white;
  font-size: 55px;
  @media (min-width: 950px)  {
   margin: auto; 

  }
`;
