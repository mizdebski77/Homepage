import { css,  styled } from "styled-components";
import { titleLeftAnimation, titleRightAnimation } from "../core/animations";

export const Wrapper = styled.section<{ leftvariant?: boolean; rightvariant?: boolean }>`
    min-height: 100vh;
    padding: 40px;
    display: grid;
    align-items: center;
    align-content: center;
    background: radial-gradient(89.04% 61.21% at 22.45% 16.58%, rgba(224, 188, 20, 0.08) 0%, rgba(255, 255, 255, 0.00) 100%);
   
    @media (max-width: ${({ theme }) => theme.breakPoint.firstBreakPoint}px){
        padding: 20px 16px;
        grid-auto-rows: min-content;
        min-height: 50vh;
        align-items: initial;
    };


    ${({ leftvariant }) => leftvariant && css`
        grid-template-columns: auto 1fr;

        @media (max-width: ${({ theme }) => theme.breakPoint.firstBreakPoint}px){
            grid-template-columns: 1fr;
            justify-content: center;
        };
    `};

    ${({ rightvariant }) => rightvariant && css`
        grid-template-columns: 1fr auto;

        @media (max-width: ${({ theme }) => theme.breakPoint.firstBreakPoint}px){
            display: flex;
            flex-direction: column-reverse;  
        };
    `};
`;

export const TitleWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    width: 300px;

    @media (max-width: ${({ theme }) => theme.breakPoint.firstBreakPoint}px){
        width: 100%;
        margin: 0 auto 20px auto;
    };
`;

export const Title = styled.h1<{ leftvariant?: boolean; rightvariant?: boolean, smaller?: boolean }>`
    color: white;
    position: absolute;
    margin: 0;
    font-size: 100px;
    letter-spacing: 2rem;
    opacity: 50%;
    text-transform: uppercase;
    word-break: normal;

    @media (max-width: ${({ theme }) => theme.breakPoint.firstBreakPoint}px){
        font-size: 80px;
        letter-spacing: 1.2rem;
        position: static;
    };

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        font-size: 40px;
        letter-spacing: 1rem;
        position: static;
    };

  ${({ leftvariant }) => leftvariant && css`
        left: 150px;
        transform: translate(-50%, -50%) rotate(-90deg);
        right: none;
        animation: ${titleLeftAnimation} 1s;
       
        @media (max-width: ${({ theme }) => theme.breakPoint.firstBreakPoint}px){
            left: none;
            transform: none;
            display: inline;
            animation: none;
        };
    `};

    
  ${({ rightvariant }) => rightvariant && css`
        transform: translate(50%, -50%) rotate(-90deg);
        right: 200px;
        animation: ${titleRightAnimation} 1s;


        @media (max-width: ${({ theme }) => theme.breakPoint.firstBreakPoint}px){
            letter-spacing: 1.2rem;
            position: static;
            transform: none;
            animation: none;
        };
    `};

    ${({ smaller }) => smaller && css`
        letter-spacing: 1.2rem;
        font-size: 100px;

        @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
            font-size: 30px;
        };
    `};
`;
