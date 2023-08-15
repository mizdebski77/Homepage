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

export const MobileNavAnimation = {
  visible: {
      height: 280,
      opacity: 1,
      transition: {
          x: { velocity: 100 },
          duration: 0.3,
      }
  },

  hidden: {
      height: 24,
      opacity: 0,
      transition: {
          x: { velocity: 100 },
          duration: 0.3,
          delay: 0.2
      }
  }
};


export const MobileLinksWrapperAnimation = {
  visible: {
      opacity: 1,
      transition: {
          staggerChildren: 0.07
      }
  },
  hidden: {
      opacity: 0,
      transition: {
          staggerChildren: 0.05,
          staggerDirection: -1
      }
  }
};