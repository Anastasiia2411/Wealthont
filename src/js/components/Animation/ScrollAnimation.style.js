import styled, { keyframes } from 'styled-components';
import ScrollAnimation from "./ScrollAnimation";

const fadeInUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const ScrollAnimationStyled = styled(ScrollAnimation)`
  opacity: 0;
  transition: all 0.5s ease-in-out;

  &.visible {
    animation: ${fadeInUp} 0.5s ease-in-out forwards;
  }`