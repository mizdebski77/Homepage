import { css,  styled } from "styled-components";
import { bottomAnimation, rightAnimation } from "../../core/animations";

export const ContentWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    align-items: center;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        display: flex;
        flex-direction: column;
        flex-wrap: wrap-reverse;
    };
`;

export const Circle = styled.div`
    width: 600px;
    height: 600px;
    border: 4px solid ${({ theme }) => theme.color.secondColor};    
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: start;
    will-change: transform, opacity;
    box-shadow: 0px 4px 23px 0px ${({ theme }) => theme.color.secondColor};
    animation-fill-mode: both;
    animation: ${bottomAnimation} 1s;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        border-radius: 0;
        width: 100%;
        height: auto
    };
`;

export const InformationsWrapper = styled.div`
    margin-top: 72px;
    margin-left: 40px;
    max-width: 400px;
    width: 100%;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        padding: 12px;
        margin-top: 0px;
        margin-left: 0px;    
    };
`;

export const DataWrapper = styled.div`
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: start;
    justify-content: center;
    gap: 10px;
    grid-auto-rows: min-content;
    margin: 8px 0;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        grid-template-columns: none;
        text-align: center;
        justify-content: center;
        gap: 0px;
    };

`;

export const Information = styled.h2<{ changeColor?: boolean, title?: boolean }> `
    font-size: 18px;
    padding: 8px;
    font-weight: normal;
    margin: 0;
    color: ${({ theme }) => theme.color.secondColor};
    min-width: 100px;

    ${({ changeColor: changecolor }) => changecolor && css`
        color:  white;
    `};

    ${({ title }) => title && css`
        font-size: 28px;

        @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
            font-size: 20px;
        };
    `}
`;

export const Description = styled.span`
    color: white;
    font-weight: normal;
    font-size: 16px;
    font-style: italic;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        font-size: 14px;
        text-align: center;
    };
`;

export const Photo = styled.img`
   max-width: 600px;
   width: 100%;
   animation: ${rightAnimation} 1s;

   @media (max-width: ${({ theme }) => theme.breakPoint.firstBreakPoint}px){
    animation: ${bottomAnimation} 1s;
    };
`;
