import React from "react";
import styled from "styled-components";

export const Button = styled.a`
  color: ${props => props.className === "button-log-in" ? "#4840BB" : "#FFFFFF"};
  border: ${props => props.className === "button-log-in" ? "1px solid #4840BB" : "none"};
  ${props => props.propOfBtn === "button-log-in" ? " max-width:120px;  text-decoration: none; font-family: 'Roboto', sans-serif;  font-style: normal;   font-weight: 700;  font-size: 16px; line-height: 22px;  border: 1px solid #4840BB; border-radius: 6px; padding: 12px 13px; color:#4840BB; transition: 0.7s; " +
          "&:hover{background-color: #4840BB; color: white; transition: 0.7s;}}" : "max-width:120px; font-family: 'Roboto', sans-serif;font-style: normal;font-weight: 700;font-size: 16px;line-height: 22px;background: #4840BB;border-radius: 6px;border: 1px solid #4840BB;padding: 12px 18px;text-decoration: none;transition: 0.7s;" +
          "&:hover{transition: 0.7s;border-radius: 6px;border: 1px solid #4840BB;background-color: #FFFFFF;color: #4840BB;}}"}
`;