import styled from "styled-components";
import { bottomAnimation } from "../../core/animations";

export const ContentWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
    animation: ${bottomAnimation} 1s;
    max-width: 1920px;
    width: 100%;
    margin: 0 auto;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        grid-template-columns: 1fr;
    };
`;

export const InfoWrapper = styled.div`
    display: grid;
    gap: 50px;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        gap:10px
    }
`;

export const Category = styled.h2`
    color: ${({ theme }) => theme.color.secondColor};
    font-size: 56px;
    text-align: center;
    padding: 20px;
    margin: 0;
    border: 2px solid ${({ theme }) => theme.color.secondColor};
    box-shadow: 0 0 10px ${({ theme }) => theme.color.secondColor};

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        width: 100%;
        margin: 0 auto;
        padding: 0px;
        font-size: 24px;
    };
`;

export const Info = styled.div`
    display: grid;
    gap: 12px;
    font-size: 24px;
    color:white;
    padding: 20px 0 20px 0;
    border-bottom: 1px solid white;
    font-style: italic;
    min-height: 170px;
    grid-auto-rows: min-content;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        font-size:16px;
        min-height: 50px;
    }
`;

export const Color = styled.span`
    color:${({ theme }) => theme.color.secondColor};
    display: block;
    font-style: italic;
`;