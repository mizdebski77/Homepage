import { keyframes } from "styled-components";

export const bottomAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(30%);
  } to {
    opacity: 1;
    transform: translateY(0%);
  }
`;

export const leftAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateX(-30%);
  } to {
    opacity: 1;
    transform: translateX(0%);
  }
`;

export const rightAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateX(30%);
  } to {
    opacity: 1;
    transform: translateX(0%);
  }
`;

export const titleRightAnimation = keyframes`
  from {
    right: 0px
  }
  to {
    right: 200px;
  }
`;

export const titleLeftAnimation = keyframes`
  from {
    left: -5%;
  }
  to {
    left: 150px;
  }
`;