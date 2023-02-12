import React from "react";
import styled from "styled-components";

export const FooterContainer = styled.div`
  background: #18172B;
  width: 100vw;
  display: flex;
  justify-content: space-between;

  & > div {
    padding-left: 50px;
    padding-top: 64px;
    @media (min-width: 570px) and (max-width: 839px) {
      padding-top: 50px;
      padding-left: 10vw;
      align-self: start;
    }
    @media (max-width: 569px) {
      align-self: start;
      padding-left: 10vw;
    }
  }
;

  @media (max-width: 839px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const FooterList = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  margin-top: 64px;
  margin-bottom: 30px;
  height: 200px;
  width: 560px;

  & > li {
    display: inline-block;

    & > a {
      font-family: 'Roboto', sans-serif;
      text-decoration: none;
      color: #FFFFFF;
      font-weight: 400;
      font-size: 15px;
      line-height: 27px;
      transition: 0.7s;

      &:hover {
        font-size: 18px;
        transition: 0.7s;
      }
    }
  
  };

  @media (max-width: 670px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
    width: 360px;
  }
`;