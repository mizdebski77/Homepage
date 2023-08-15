import React, { useState } from 'react';
import { Logo, NavbarWrapper, LinksWrapper, NavLink,  MobileNavbarWrapper, MobileLinksWrapper, MobileNavbar } from './styledNavbar';
import { LinksData } from './links';
import Hamburger from 'hamburger-react';

export const Navbar = () => {

    const [mobileNavbar, setMobileNavbar] = useState(false);
    const [navbarColor, setNavbarColor] = useState(false);

    const toggleMobileNavbar = () => {
        setMobileNavbar(!mobileNavbar);
    };

        const changeColor = () => {
        if (window.scrollY >= 100) {
            setNavbarColor(true);
        } else {
            setNavbarColor(false);
        };
    };

    window.addEventListener("scroll", changeColor, { passive: true });


    return (
        <>

            <NavbarWrapper scrolled={navbarColor}>
                <Logo to="home"
                    spy={true}
                    offset={-70}
                    smooth={true}
                    duration={1500}>Marcin Izdebski</Logo>
                <LinksWrapper>
                    {LinksData.map((link, index) => (
                        <NavLink
                            key={index}
                            spy={true}
                            to={link.to}
                            smooth={true}
                        >
                            {link.text}
                        </NavLink>
                    ))}
                </LinksWrapper>

                <MobileNavbar onClick={toggleMobileNavbar}>
                    <Hamburger color='#D9B815' size={28} />
                </MobileNavbar>
            </NavbarWrapper>
            {mobileNavbar && (

                <MobileNavbarWrapper>

                    <MobileLinksWrapper>
                        {LinksData.map((link, index) => (
                            <NavLink
                                key={index}
                                spy={true}
                                to={link.to}
                                smooth={true}
                            >
                                {link.text}
                            </NavLink>
                        ))}
                    </MobileLinksWrapper>
                </MobileNavbarWrapper>
            )}
        </>
    );
};

