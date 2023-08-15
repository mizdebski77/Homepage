import { styled } from "styled-components";
import SVG from "react-inlinesvg";
import { bottomAnimation,  rightAnimation } from "../../core/animations";

export const ContentWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;

    @media (max-width: ${({ theme }) => theme.breakPoint.firstBreakPoint}px){
        grid-template-columns: 1fr;
    };
`;

export const Form = styled.form`
    display: grid;
    gap: 20px;
    animation: ${bottomAnimation} 1s;
`;

export const InputsWrapper = styled.div`
    display: grid;
    gap: 20px;
    width: 100%;
    margin: auto;
    @media (max-width: ${({ theme }) => theme.breakPoint.firstBreakPoint}px){
        width: 100%;
    };
    `;

export const Header = styled.h2`
    color: ${({ theme }) => theme.color.secondColor};
    text-align: center;
    margin:0 0 20px 0;
    font-weight: normal;
    font-size: 28px;
    @media (max-width: ${({ theme }) => theme.breakPoint.firstBreakPoint}px){
        font-size: 20px;
        margin: 0;
    };
`;

export const Input = styled.input`
    padding: 10px;
    font-size: 20px;
    border-radius: 5px;

    @media (max-width: ${({ theme }) => theme.breakPoint.firstBreakPoint}px){
        font-size: 16px;
    };
    &:focus {
        outline: none;
    }
`;

export const Message = styled.textarea`
    padding: 10px;
    font-size: 20px;
    color: ${({ theme }) => theme.color.mainColor};
    min-height: 150px;
    border-radius: 5px;
    resize: none;

    @media (max-width: ${({ theme }) => theme.breakPoint.firstBreakPoint}px){
        font-size: 16px;
    };
    &:focus {
        outline: none;
    }
`;

export const ContactDataWrapper = styled.div`
    display: grid;
    grid-auto-rows: min-content;
    gap: 20px;
    margin: auto;
    align-items: center;
    justify-content: start;
    animation: ${rightAnimation} 1s;
    
    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        display: grid;
        grid-template-columns: 1fr;
     };
`;

export const SVGIcon = styled(SVG)`
    fill: ${({ theme }) => theme.color.secondColor};
    width: 40px;
`;

export const ContactTitle = styled.h1`
    color: ${({ theme }) => theme.color.secondColor};
    margin: 0;
    display: flex;
    align-items: center;
    font-weight: normal;
    font-size: 24px;

    @media (max-width: ${({ theme }) => theme.breakPoint.firstBreakPoint}px){
        font-size: 16px;
        justify-content: center;
    };

`;

export const SendButton = styled.button`
    background: ${({ theme }) => theme.color.secondColor};
    margin: 0;
    padding: 10px;
    border-radius: 5px;
    font-size: 20px;
    border: none;
    color: white;
    cursor: pointer;
    transition: 0.5s;

    @media (max-width: ${({ theme }) => theme.breakPoint.firstBreakPoint}px){
        font-size: 16px;
    };

    &:hover {
        transform: scale(1.03);
    }

    &:active {
        background: ${({ theme }) => theme.color.mainColor};
        border: 1px solid ${({ theme }) => theme.color.secondColor};
    }
`;

export const ContactLink = styled.a`
    color: white;
    text-decoration: none;
    font-size: 16px;
    display: flex;
    font-style: italic;
    transition: 0.3s;

    &:hover {
        color: ${({ theme }) => theme.color.secondColor};
    };

    @media (max-width: ${({ theme }) => theme.breakPoint.firstBreakPoint}px){
        font-size: 14px;
        justify-content: center;
    };
`;

export const ContactContainer = styled.div`
    display: grid;
    gap: 20px;
    width: 100%;
    justify-content: center;
    align-items: center;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: min-content;
    border-bottom: 1px solid ${({ theme }) => theme.color.secondColor};
    padding: 10px;

    @media (max-width: ${({ theme }) => theme.breakPoint.firstBreakPoint}px){
        font-size: 16px;
        grid-template-columns: 1fr;        
    };
`;