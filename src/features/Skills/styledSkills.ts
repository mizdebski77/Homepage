import { css, styled } from "styled-components";
import { bottomAnimation, leftAnimation, rightAnimation } from "../../core/animations";

export const ContentWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: start;
    gap: 40px;

    
    @media (max-width: ${({ theme }) => theme.breakPoint.firstBreakPoint}px){
        display: grid;
        grid-template-columns: 1fr 1fr;
    };

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        display: flex;
        flex-direction: column;
        flex-wrap: wrap-reverse;
        margin: 0 auto;
        gap: 20px;
    };

`;

export const Card = styled.div<{ animationLeft?: boolean, animationBottom?: boolean, animationRight?: boolean }>`
    box-shadow: 0px 0px 21px 8px rgba(224, 188, 20, 0.17);
    display: grid;
    max-width: 540px;
    width: 100%;
    padding: 20px;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        max-width: 650px;
        width: 100%;
        padding: 12px;
    };

    ${({ animationLeft }) => animationLeft && css`
        animation: ${leftAnimation} 1s; 
    `};
    
    ${({ animationBottom }) => animationBottom && css`
        animation: ${bottomAnimation} 1s; 
    `};

    ${({ animationRight }) => animationRight && css`
        animation: ${rightAnimation} 1s; 
    `};
`;

export const CardTitle = styled.h2`
    color: ${({ theme }) => theme.color.secondColor};
    text-align: center;
    font-size: 32px;
    font-weight: normal;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        font-size: 24px;
        margin: 10px;
    };
`;

export const ElementsList = styled.ul<{ columns?: boolean }>`
    color: white;
    display: grid;
    padding: 0px;
    grid-template-columns: 1fr 1fr;
    column-gap: 40px;

    ${({ columns }) => columns && css`
        grid-template-columns: 1fr;
        gap: 20px;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        grid-template-columns: 1fr;
        column-gap: 0;
        gap: 10px;
    };
    `};

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        column-gap: 0;
    };
`;


export const Element = styled.li`
    letter-spacing: 0.05em;
    display: flex;
    font-weight: normal;
    font-size: 20px;
    padding: 4px;
    &::before {
        content: "•";
        margin-right: 0.5em;
    };

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        font-size: 16px;
    };
`;

export const IconsCardsWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;

    @media (max-width: ${({ theme }) => theme.breakPoint.firstBreakPoint}px){
        grid-template-columns: 1fr;
    };
`;

export const IconsWrapper = styled.div < { poem?: boolean }> `
    display: grid;
    padding: 10px;
    gap: 20px;
    align-items: center;

    ${({ poem }) => poem && css`
        grid-template-columns: auto 1fr;
    `};

    @media (max-width: ${({ theme }) => theme.breakPoint.tinyPhone}px){
        display: flex;
        align-items: center;
    };
`;

export const FlagImage = styled.img`
    width: 80px;
    height: 50px;
    border-radius: 10px;
    margin: auto;
    box-shadow: 0 0 16px ${({ theme }) => theme.color.mainColor};

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        width: 60px;
        height: 40px;
        margin: 0;
        box-shadow: 0 0 8px ${({ theme }) => theme.color.mainColor};

    };
`;

export const Caption = styled.span`
    font-size: 20px;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        font-size: 16px;
    };
`;

export const SoftwareIcon = styled.img`
    width: 50px;
`;