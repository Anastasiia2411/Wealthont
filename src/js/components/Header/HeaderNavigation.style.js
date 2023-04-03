import React from "react";
import styled, {css} from "styled-components";

export const HeaderAdaptiveNavigation = styled.div`
  width: 45px;
  height: 45px;
  background: #FFFFFF;
  border: 1px solid #4840BB;
  border-radius: 8px;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: center;
  align-self: center;
  z-index: 3;
  position: relative;
  ${({ isOpen }) => isOpen && css`
    @media (min-width: 380px) and  (max-width: 570px){
      position: relative;
      div:nth-child(1) {
        transform: translateY(9px) rotate(50deg);
      }

      div:nth-child(2) {
        opacity: 0;
      }

      div:nth-child(3) {
        transform: translateY(-9px) rotate(-50deg);
      }
    }
    @media (min-width: 570px) and  (max-width: 792px){
      div:nth-child(1) {
        transform: translateY(12px) rotate(50deg);
      }

      div:nth-child(2) {
        opacity: 0;
      }

      div:nth-child(3) {
        transform: translateY(-12px) rotate(-50deg);
      }
    }
  
  `}

  & > div {
    width: 30px;
    height: 2px;
    background: #4840BB;
    transition: all 0.3s ease-in-out;
  }

  @media (min-width: 792px) {
    position: relative;
    display: none;
  }
  @media (min-width: 380px) and  (max-width: 580px) {
    position: relative;
    width: 35px;
    height: 35px;
    margin-right: 1vw;
    margin-left: 3vw;
    & > div {
      width: 20px;
      height: 1px;
    }
  }
`;

export const HeaderNavigationUl = styled.ul`
  display: flex;
  font-family: 'Roboto', sans-serif;
  list-style: none;
  width: 300px;
  justify-content: space-between;
  font-weight: 400;
  font-size: 16px;
  line-height: 27px;
  padding-left: 0;
  @media (max-width: 791px) {
    position: absolute;
    left: 50%;
    top: calc(0% + 55px);
    transform: translateX(-50%);
    background: aliceblue;
    flex-direction: column;
    max-height: 210px;
    max-width: 170px;
    justify-content: space-around;
    border-radius: 6px;
    z-index: 2;
    & > li {
      padding: 12px 0;
      transition: 0.6s;
      &:hover {
        transition: 0.6s;
        background-color: lightblue;
      }
    }
  }
`;

export const ButtonContainer = styled.div`
  width: 200px;
  display: flex;
  justify-content: space-between;
`;

export const HeaderElementContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  @media (max-width: 792px) {
    justify-content: space-between;
    & > div {
      display: flex;
      justify-content: space-around;
      width: 280px;
    }
  }
  @media (min-width: 414px) and  (max-width: 580px) {
    & > div {
      justify-content: end;
      width: 280px;
    }
  }
`;

export const HeaderNavigationLink = styled.a`
  color: #230B59;
  text-decoration: none;
  transition: 1s;
  cursor: pointer;
  user-select: none;

  &:hover {
    user-select: none;
    cursor: pointer;
    transition: 1s;
    font-size: 20px;
  }
`;

