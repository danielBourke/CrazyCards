import React from "react";
import styled from "styled-components";

const Button = styled.a`
  display: inline-block;
  border-radius: 25px;
  padding: 1rem 0;

  width: 11rem;
  background: yellow;
  color: black;
  display: flex;
  justify-content: center;
  align-content: center;
  width: 100%;
  margin-top: 20px;
  &:hover {
    background: #fff8b0;
    transition: 0.3s ease-out;
    cursor: pointer;
  }
`;

const HeroButton = ({ txt, func }) => {
  return <Button onClick={func}>{txt}</Button>;
};

export default HeroButton;
