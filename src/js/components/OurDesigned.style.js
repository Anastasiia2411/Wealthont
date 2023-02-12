import React from "react";
import styled from "styled-components";

export const OurDesignedDiv = styled.div`
  margin-top: 90px;
  display: flex;
  position: relative;
  @media (max-width: 1050px) {
    flex-direction: column;
    & > img {
      max-width: 300px;
      max-height: 500px;
      align-self: center;
    }
  }
  @media (min-width: 886px)and(max-width: 1050px) {
    flex-direction: column;
    & > img {
      max-width: 300px;
      max-height: 500px;
      align-self: center;
    }
  }
`;

export const OurDesignedBankCardImg = styled.img`
  width: 350px;
  height: 470px;
  align-self: center;
  ${props => props.visibilytyProp === "hidden-card" ? "opacity:0;" : " width: 400px; height: 500px; position: absolute; left: 0.5%; bottom: 7%;"
  };
  @media (min-width: 670px) and (max-width: 897px) {
    ${props => props.visibilytyProp === "hidden-card" ? "opacity:0; display:none" : "width: 250px; height: 350px; position: absolute; left: 14.5%;; bottom: 48%;"
    };
  };
  @media (min-width: 380px) and (max-width: 669px) {
    ${props => props.visibilytyProp === "hidden-card" ? "opacity:0; display:none" : "width: 250px; height: 350px; position: absolute; left: 3.5%;; bottom: 48%;"
    };
  };
  @media (min-width: 886px) and (max-width: 1050px) {
    ${props => props.visibilytyProp === "hidden-card" ? "opacity:0; display:none" : "width: 250px; height: 350px; position: absolute; left: 22%; bottom: 48%;"
    };
  }
`;