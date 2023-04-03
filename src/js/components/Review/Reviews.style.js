import React from "react";
import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";

export const StyledCarousel = styled(Carousel)`
  & .control-next.control-arrow:before {
    content: "";
    display: block;
    width: 0;
    height: 0;
    border-top: 13px solid transparent;
    border-left: 25px solid white;
    border-bottom: 13px solid transparent;
  }

  & .control-prev.control-arrow:before{
    content: "";
    display: block;
    width: 0;
    height: 0;
    border-top: 13px solid transparent;
    border-right: 25px solid white;
    border-bottom: 13px solid transparent;
  }

  & .control-prev.control-arrow {
    background-color: black;
  }

  & .control-next.control-arrow {
    background-color: black;
  }

  & .control-dots .dot {
    background-color: #230B59;
  }
`;

export const OurReviewsSection = styled.div`
  overflow: hidden;
  padding-top: 100px;
  padding-bottom: 100px;
  height: 450px;
  position: relative;
  background: #230B59;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const CarouselWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const ReviewWrapper = styled.div`
margin: 0 auto;
  max-width: 400px;
  height: 400px;
  overflow: hidden;
  background: #FFFFFF;
  padding-left: 35px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  @media(min-width: 1020px) and (max-width: 1200px){
    max-width: 300px;
    height: 300px;
  }
  @media(min-width: 380px) and (max-width: 1019px){
    min-width: 300px;
  };
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
  font-size: 40px;
  line-height: 40px;
  letter-spacing: 1.26px;
  color: #230B59;
  text-align: start;
  max-width: 340px;
  margin: 0 2vw 0 0;

  & > span {
    font-weight: 700;
  };
  
  @media(min-width: 1000px) and (max-width: 1200px){
    font-size: 24px;
    line-height: 24px;
  };
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
