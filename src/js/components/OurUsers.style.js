import React from "react";
import styled from "styled-components";

export const OurUsersHeader = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 58px;
  line-height: 54px;
  text-align: center;
  letter-spacing: 3px;
  color: #230B59;
  max-width: 910px;
  margin: 60px auto;
  @media (max-width: 684px) {
    font-size: 48px;
    line-height: 46px;
  }
`;

export const OurUsersParagraph = styled.p`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 15px;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  text-align: center;
  color: #230B59;
  margin-top: 95px;
`;

export const OurUsersList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  padding: 0;
  margin-top: 40px;
  justify-content: space-between;
  margin-bottom: 150px;
  @media (min-width: 640px) and (max-width: 1000px) {
    display: grid;
    grid-template-columns: 1fr 1fr ;
    grid-template-rows: 1fr 1fr;
  };
  @media (max-width: 639px){
    flex-direction: column;
    &>li{
      margin-top: 20px;
    }
  }
`;
export const WindowImg = styled.img`
  @media (max-width: 684px) {
    width: 100vw;
  }
`;

export const CnbcSvg = styled.li`
  @media (min-width: 640px) and (max-width: 1000px) {
    grid-column-start: 1;
    grid-column-end: 3;
  };
`;
