import React from "react";
import styled from "styled-components";



export const AboutUsDiv = styled.div`
  display: flex;
  margin-top: 100px;
  position: relative;
  @media (max-width: 885px) {
    flex-direction: column-reverse;
    justify-content: start;
    align-items: start;
  }
`;

export const AboutUsTextWrapper = styled.div`
  color: #230B59;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  max-width: 450px;
  ${props => props.sideProperty === "left" ? "margin-left:3vw; align-self:center;" : "margin-right: 3vw;"};
  @media (max-width: 885px) {
    max-width: 650px;
    justify-content: center;
    align-self: center;
    margin: 0;
  };
  @media (min-width: 886px)and(max-width: 1200px) {
    max-width: 850px;
    justify-content: center;
    align-self: center;
    margin: 0;
  };
`;

export const AboutUsTextWrapperHeader = styled.h2`
  margin-bottom: 10px;
  text-align: start;
  font-size: 56px;
  font-weight: 400;
  line-height: 54px;
  letter-spacing: 3px;
  @media (max-width: 885px) {
    text-align: center;
    margin-top: 60px;
  };
  @media (min-width: 886px) and (max-width: 1200px) {
    text-align: center;
    margin-top: 60px;
  }
`;

export const AboutUsTextWrapperParagraph = styled.p`
  text-align: start;
  font-size: 17px;
  font-weight: 400;
  line-height: 22px;
  @media (max-width: 885px) {
    text-align: center;
    margin-top: 30px;
    margin-bottom: 30px;
  }
  @media (min-width: 886px) and (max-width: 1200px) {
    text-align: center;
    margin-top: 30px;
    margin-bottom: 30px;
  }
`;

export const AboutUsButtonWrapper = styled.div`
  width: 270px;
  display: flex;
  justify-content: space-between;
  @media (max-width: 885px) {
    width: 100%;
    justify-content: space-evenly;
  }
  @media (min-width: 886px) and (max-width: 1200px) {
   margin: 0 auto;
    width: 270px;
    justify-content: space-between;
  }
`;

export const TechnologiesWrapper = styled.div`
  display: flex;
`;

export const Telephone = styled.img`
  margin-left: 4vw;
  @media (max-width: 885px) {
    margin-left: 8vw;
  }
`;

export const MessageAccountInformation = styled.div`
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  &>div{
    display: flex;
    align-items: center;
  }
`;

export const IconContainer = styled.div`
  display: inline-block;
  padding: 2px 4px;
  height: 20px;
  width: 18px;
  border-radius: 5px;
  background: #4840BB;
`;

export const MessageAccountInformationMessageHeader = styled.h2`
  margin-left: 1vw;
  font-family: 'Roboto', sans-serif;
  color: #000000;
  text-transform: uppercase;
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 16px;
`;

export const MessageAccountInformationTimeMenager = styled.p`
  margin: 0 0 0 0;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 10px;
  line-height: 16px;
  color: #000000;
`;

export const MessageAccountInformationMainText = styled.p`
  text-align: start;
  margin: 18px 0 0 0;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 18px;
  color: #000000;
`;

export const FirstMessage = styled.div`
  background: rgba(239, 239, 240, 1);
  border-radius: 12px;
  padding: 14px;
  position: absolute;
  top: 33%;
  right: 7%;
  max-width: 340px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.2), 0 16px 20px rgba(0,0,0,0.2);

  @media only screen and (min-width: 560px) and (max-width: 885px) {
    max-width: 340px;
    justify-content: center;
    top: 17%;
    right: 22%;
  };
  @media (max-width: 559px) {
    max-width: 340px;
    justify-content: center;
    top: 16%;
    right: 13%;
  }
`;

export const SecondMessage = styled.div`
  background: rgba(239, 239, 240, 1);
  border-radius: 12px;
  padding: 14px;
  position: absolute;
  right: -1%;
  max-width: 340px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.2), 0 16px 20px rgba(0,0,0,0.2);
  @media (max-width: 885px) {
    max-width: 340px;
    justify-content: center;
    right: 12%;
  }
`;

export const ThirdMessage = styled.div`
  background: rgba(239, 239, 240, 1);
  border-radius: 12px;
  padding: 14px;
  position: absolute;
  top: 65%;
  right: 2%;
  max-width: 340px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.2), 0 16px 20px rgba(0,0,0,0.2);
  @media (max-width: 885px) {
    max-width: 340px;
    justify-content: center;
    top: 40%;
    right: 12%
  }
 
`;
