import React from "react";
import styled from "styled-components";

export const OurReviewsSection = styled.div`
  background: #230B59;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
`;

export const OurReviewsSectionContentWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-grow: 1;
  max-width: 1240px;
`;

export const ReviewWrapper = styled.div`
  margin-top: 150px;
  margin-bottom: 150px;
  max-width: 400px;
  height: 400px;
  overflow: hidden;
  background: #FFFFFF;
  padding-left: 35px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ReviewCompanyHeader = styled.h4`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 17px;
  color: #230B59;
  letter-spacing: 0.7px;
  text-transform: uppercase;
  text-align: start;
`;

export const ReviewParagraph = styled.p`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 42px;
  line-height: 42px;
  letter-spacing: 1.26px;
  color: #230B59;
  text-align: start;
  max-width: 340px;
  margin: 0 2vw 0 0;

  & > span {
    font-weight: 700;
  }
`;

export const CommentatorsNameParagraph = styled.p`
  color: #230B59;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 22px;
  text-align: start;
`;
