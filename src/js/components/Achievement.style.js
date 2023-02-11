import React from "react";
import styled from "styled-components";

export const OurAchievementList = styled.ul`
  display: flex;
  list-style: none;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  margin-top: 30px;
  margin-bottom: 0;
  @media(max-width: 792px){
    text-align: start;
   display: grid;
    justify-items: center;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr;
    row-gap: 10px;
    margin-top: 60px;
  }
  @media (min-width:414px) and  (max-width: 580px){
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    gap:20px;
    margin-top: 70px;
  }
`;

export const OurAchievementListEl = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const OurAchievementListElParagraph = styled.p`
  margin: 5px 0 0 0;
  text-align: start;
  color: #230B59;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 19px;

  & > span {
    position: relative;

    &::before {
      position: absolute;
      content: "2";
      font-family: 'Roboto', sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 11px;
      color: #230B59;
      right: -10px;
      top: -10px;
    }
    @media(max-width: 792px){
    text-align: center;
      align-items: center;
    }
  }
`;

export const OurAchievementListElHeader = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 27px;
  line-height: 32px;
  letter-spacing: 1px;
  color: #230B59;
  position: relative;
  margin: 0;

  & > span {
    position: absolute;
    top: 7px;
    right: 0;
  }
`;

export const NerdwalletImg = styled.img`
  width: 132px;
  height: 21px;
  margin-bottom: 10px;
`;