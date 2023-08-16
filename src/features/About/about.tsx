import React from 'react';
import { Title, TitleWrapper, Wrapper } from '../../common/commonElements';
import { DataWrapper, Description, Information, InformationsWrapper, Photo, Circle, } from './styledAbout';
import photo from '../../common/Images/me.png';
import { ContentWrapper } from './styledAbout';
import { informations } from './informations';
import { useInView } from 'react-intersection-observer';

export const About = () => {

    const [ref, inView] = useInView({
        triggerOnce: true,
        rootMargin: calculateRootMargin(),
    });

    function calculateRootMargin() {
        const screenWidth = window.innerWidth;

        if (screenWidth < 768) {
            return '0px 0px -10% 0px';
        } else {
            return '0px 0px -70% 0px';
        }
    };



    return (
        <Wrapper leftvariant id='about' ref={ref}>
            {inView && (
                <>
                    <TitleWrapper>
                        <Title leftvariant> About Me </Title>
                    </TitleWrapper>

                    <ContentWrapper>
                        <Circle>
                            <InformationsWrapper>
                                {informations.map((information, index) => (
                                    <DataWrapper>
                                        <Information name={information.id === 1} > {information.title}: </Information>
                                        <Information name={information.id === 1} changeColor> {information.data}</Information>
                                    </DataWrapper>
                                ))}
                                <Description>
                                    I'm an enthusiastic Frontend Developer with a strong passion for new technologies and a deep commitment to learning React. I am highly motivated and thrive on being a fast learner. Currently, I am actively seeking new job opportunities to further enhance my skills and contribute to innovative projects.
                                </Description>
                            </InformationsWrapper>
                        </Circle>

                        <Photo src={photo} alt='Profile photo' />
                    </ContentWrapper>
                </>)}
        </Wrapper >

    );
};

