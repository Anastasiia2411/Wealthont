import React from "react";
import styled from "styled-components";

export const SavingAndInvestingDiv = styled.div`
  display: flex;
  background: #4840BB;
  justify-content: space-around;
  width: 100vw;
  margin-top: 60px;

  & > div {
    display: flex;
  }

  @media (max-width: 885px) {
    flex-direction: column-reverse;
    & > div {
      display: flex;
      flex-direction: column-reverse;
    }
  }
`;

export const SavingAndInvestingTextWrapper = styled.div`
  margin-left: 10vw;
  max-width: 450px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 885px) {
    align-self: center;
    max-width: 700px;
    margin-left: 0;
  }
`;

export const SavingAndInvestingParagraph = styled.p`
  color: #FFFFFF;
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  max-width: 380px;
  @media (max-width: 885px) {
    max-width: 700px;
    text-align: center;
    margin-bottom: 40px;
  }
`;

export const SavingAndInvestingHeader = styled.h2`
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 56px;
  line-height: 54px;
  color: #FFFFFF;
  margin-bottom: 0;
  max-width: 305px;
  @media (max-width: 885px) {
    max-width: 700px;
    text-align: center;
  }
`;

export const OurAchievementImgTag = styled.img`
  margin-left: 13vw;
  margin-top: 30px;
  width: inherit;
  margin-bottom: 10px;
  @media (max-width: 885px) {
    align-self: center;
    margin-left: 0;
    object-fit: cover;
    width: inherit;
    min-width: 200px;
    max-width: 350px;
    margin-bottom: 30px;
  };
  @media (min-width: 885px) and(max-width: 985px) {
    width: 450px;
    margin-left: 0;

  };
  @media (min-width: 900px) and(max-width: 1000px) {
    width: 600px;
    margin-left: 0;
  };
  @media (min-width: 886px) and (max-width: 1200px) {
    margin-left: 0;
    align-self: center;
    object-fit: cover;
    width: inherit;
    min-width: 200px;
    max-width: 550px;
  }
`;