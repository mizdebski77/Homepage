import { keyframes, styled } from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { bottomAnimation } from "../../core/animations";


export const CustomSwiper = styled(Swiper)`
  max-width: 1300px;
  width: 100%;
  padding: 40px;
  margin: 0 auto;
  animation: ${bottomAnimation} 1s;


    .swiper-button-next {
        color: ${({ theme }) => theme.color.secondColor};
    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        display: none;
    };
    };

    .swiper-button-prev {
      color: ${({ theme }) => theme.color.secondColor};

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        display: none;
    };
    };

    .swiper-pagination {
        position: initial;
        margin-top: 10px;
    };

    .swiper-pagination-bullet-active {
        background: ${({theme}) => theme.color.secondColor};
    };

    .swiper-pagination-bullet {
        background: ${({theme}) => theme.color.secondColor};
    }

    .swiper-wrapper {
        box-sizing: inherit;
    }

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        padding: 0px;
    }
`;

const rotate = keyframes`
	100% {
		transform: rotate(1turn);
	}
`

export const Container = styled.div`
	padding: 20px;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        padding: 10px;
    };
`;

export const CustomSlide = styled(SwiperSlide)`
    border-radius: 10px;
    backdrop-filter: blur(3px);
	overflow: hidden;
    min-height: 540px;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        min-height: 400px;
    };

	&::before {
		content: '';
		position: absolute;
		z-index: -2;
		left: -50%;
		top: -50%;
		width: 200%;
		height: 200%;
		background-position: 0 0;
		background-image: conic-gradient(transparent, white, transparent 50%);
		animation: ${rotate} 4s linear infinite; 
	};
	
	&::after {
		content: '';
		position: absolute;
		z-index: -1;
		left: 6px;
		top: 6px;
		width: calc(100% - 12px);
		height: calc(100% - 12px);
        background: ${({ theme }) => theme.color.mainColor};
        box-shadow: 0 0 10px ${({ theme }) => theme.color.secondColor};
		border-radius: 5px;
	};
	
`;


export const ProjectCard = styled.div`
    padding: 24px;
    border-radius: 10px;
    backdrop-filter: blur(3px);
	overflow: hidden;

	&::before {
		content: '';
		position: absolute;
		z-index: -2;
		left: -50%;
		top: -50%;
		width: 200%;
		height: 200%;
		background-position: 0 0;
		background-image: conic-gradient(transparent, white, transparent 50%);
		animation: ${rotate} 4s linear infinite; 
	};
	
	&::after {
		content: '';
		position: absolute;
		z-index: -1;
		left: 6px;
		top: 6px;
		width: calc(100% - 12px);
		height: calc(100% - 12px);
        background: ${({ theme }) => theme.color.mainColor};
        box-shadow: 0 0 10px ${({ theme }) => theme.color.secondColor};
		border-radius: 5px;
	};

`;

export const ProjectTitle = styled.h2`
    font-size: 32px;
    text-align: center;
    text-decoration: underline;
    text-underline-offset: 8px;
    margin: 10px;
    color: ${({ theme }) => theme.color.secondColor};
    font-weight: 100;
    font-style: italic;
    margin-bottom: 20px;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        font-size: 28px;
    };
`;

export const LinksWrapper = styled.div`
    display: grid;
    align-items: center;
    justify-content: center;
    text-align: center;
`;

export const Caption = styled.h3`
    font-size: 24px;
    color: ${({ theme }) => theme.color.secondColor};
    margin: 10px 0;
    font-weight: 100;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        font-size: 20px;
    };
`;

export const Projectlink = styled.a`
    color: white;
    font-style: italic;
    font-size: 20px;
    font-weight: 100;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        font-size: 16px;
    };
`;

export const Description = styled.h4`
    font-size: 20px;
    margin: 0;
    color: white;
    font-style: italic;
    font-weight: 100;
    min-height: 100px;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        font-size: 16px;
    };
`;