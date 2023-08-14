import { Link } from "react-scroll";
import { styled } from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
`;

export const NavbarWrapper = styled.nav`
    position: fixed;
    z-index: 1;
    max-width: 1600px;
    width: 100%;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: ${({ theme }) => theme.breakPoint.firstBreakPoint}px){
      justify-content: space-between;
      padding: 12px;
    };
`;

export const Logo = styled(Link)`
    color: ${({ theme }) => theme.color.secondColor};
    font-size: 28px;
    cursor: pointer;
    font-weight: bold;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
      font-size: 20px;
    };
`;

export const LinksWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(5, auto);
    gap: 50px;
    align-items: center;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
      display: none;
    };
`;

const activeClassName = "active";

export const NavLink = styled(Link)`
    color: ${({ theme }) => theme.color.linksColor};
    text-transform: uppercase;
    cursor: pointer;
    transition: 0.5s;

    &:hover {
        transform: translateY(-5px);
        color: ${({ theme }) => theme.color.secondColor};
    };

    &.${activeClassName} {
        color: ${({ theme }) => theme.color.secondColor};
        border-bottom: 1px solid ${({ theme }) => theme.color.secondColor};
    };

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
      text-align: center;
      padding: 4px;
    };
`;

export const MobileNavbar = styled.div`
    display: flex;
    align-items: center;
    justify-content: end;
    cursor: pointer;

    @media (min-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        display: none;
    };
`;

export const MobileNavbarWrapper = styled.div`
    background: ${({ theme }) => theme.color.navbar};
    position: fixed;
    width: 100%;
    z-index: 10;
    top: 72px;
`;

export const MobileLinksWrapper = styled.div`
    display: grid;
    justify-content: center;
    gap: 20px;
    padding: 20px;
`;


