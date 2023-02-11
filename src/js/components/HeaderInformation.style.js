import React from "react";
import styled from "styled-components";

export const HeaderInformContainer = styled.div`
  display: flex;
  margin-top: 20px;
  @media (max-width: 974px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const HeaderImg = styled.img`
  max-width: 745px;
  max-height: 560px;
  @media (max-width: 974px) {
    max-width: 1000px;
    width: 100vw;
  }
`;

export const HeaderElementContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 4vw;
  align-items: start;
  @media (max-width: 974px) {
    margin-left: 0px;
    align-items: center;
  }
`;
export const HeaderText = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 50px;
  line-height: 57px;
  text-align: start;
  letter-spacing: 1.899px;
  color: #230B59;
  @media (min-width:414px) and  (max-width: 580px){
   text-align: center;
  }
`;

export const HeaderParagraph = styled.p`
  font-family: 'Roboto', sans-serif;
  color: #230B59;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 22px;
  margin: 0;
  text-align: start;

  &:nth-child(3) {
    margin-bottom: 30px;
  }
`;