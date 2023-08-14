import { styled } from "styled-components";
import background from '../../common/Images/background.png'
import SVG from "react-inlinesvg";
import { Link } from "react-scroll";
import { bottomAnimation, leftAnimation, rightAnimation } from "../../core/animations";

export const Wrapper = styled.section`
    min-height: 100vh;
    background-image: url("${background}");
    background-size: cover;
    background-position:center ;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px;
`;

export const ContentWrapper = styled.div`
    max-width: 850px;
    width: 100%;
    padding: 64px 20px;
    display: grid;
    justify-content: center;
    align-items: center;
    gap: 20px;
    text-align: center;
    box-shadow: 0 0 10px ${({ theme }) => theme.color.secondColor};
    background: rgba(24, 24, 27, 0.6);
    border-radius: 10px;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        padding: 32px 10px;
    };
`;

export const Name = styled.h1`
    color: white;
    font-size: 60px;
    font-weight: bold;
    margin: 0;
    animation: ${rightAnimation} 1s;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
      font-size: 32px;
    }
`;

export const Span = styled.span`
    color: ${({ theme }) => theme.color.secondColor};
`;

export const Header = styled.h2`
    color: white;
    font-size: 32px;
    font-weight: normal;
    margin: 0;
    animation: ${leftAnimation} 1s;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
      font-size: 20px;
    }
`;

export const SocialsWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 8px 0;
    animation: ${leftAnimation} 1s;
`;

export const SocialLink = styled.a`
    transition: 0.3s;
    border: 1px solid ${({ theme }) => theme.color.secondColor};
    border-radius: 50%;
    display: flex;
    align-items: center;
    box-shadow: 0 0 10px ${({ theme }) => theme.color.secondColor};

    &:hover{
        transform: scale(1.2);
    }
`;

export const SocailThumbnail = styled(SVG)`
    height: 40px;
    width: 40px;
    fill: white;
    transition: 0.5s;
    cursor: pointer;

    &:hover {
        fill: ${({ theme }) => theme.color.secondColor};
    }

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
      height: 30px;
      width: 30px;
    }
`;

export const ContactButton = styled(Link)`
    border: 2px solid  ${({ theme }) => theme.color.secondColor};
    cursor: pointer;
    padding: 12px;
    max-width: 200px;
    width: 100%;
    text-align: center;
    font-size: 20px;
    color: white;
    margin: auto;
    margin-top: 40px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    transition: 0.3s;
    animation: ${bottomAnimation} 1s;
    &:hover{
        transform: scale(1.03);
        box-shadow: 0 0 10px ${({ theme }) => theme.color.secondColor};
    }

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        font-size: 16px;
        margin: 0 auto;
        max-width: 154px;
    };
`;

export const ButtonSvg = styled(SVG)`
    width: 30px;
    height: 30px;
    fill:${({ theme }) => theme.color.secondColor};
    transition: 0.3s;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        width: 24px;
        height: 24px;
    };
`;