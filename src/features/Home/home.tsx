import React from 'react';
import { ButtonSvg, ContactButton, ContentWrapper, Header, Name, SocailThumbnail, SocialLink, SocialsWrapper, Span, Wrapper } from './styledHome';
import { socialLinksData } from './links';
import mailImg from '../../common/Images/mail.svg';

export const Home = () => {
    return (
        <Wrapper>
            <ContentWrapper>
                <Header>Hello</Header>
                <Name>I'm</Name>
                <Name><Span>Marcin</Span> Izdebski</Name>
                <Header>Frontend Developer</Header>

                <SocialsWrapper>
                    {socialLinksData.map((social, index) => (
                        <SocialLink key={index}>
                            <SocailThumbnail src={social.src} />
                        </SocialLink>
                    ))}
                </SocialsWrapper>

                <ContactButton to="contact">
                    <ButtonSvg src={mailImg} />
                    Let's talk
                </ContactButton>

            </ContentWrapper>
        </Wrapper>
    );
};

