import React from 'react';
import { Title, TitleWrapper, Wrapper } from '../../common/commonElements';
import { Card, CardTitle, ContentWrapper, ElementsList, Element, IconsWrapper, FlagImage, Caption, SoftwareIcon } from './styledSkills';
import { Languages, Skillset, Softwares } from './skillset';
import { useInView } from 'react-intersection-observer';

export const Skills = () => {

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
        <Wrapper rightvariant id='skillset' ref={ref}>
            {inView && (
                <>
                    <ContentWrapper>
                        <Card animationLeft>
                            <CardTitle>Skills</CardTitle>
                            <ElementsList>
                                {Skillset.map((skill, index) => (
                                    <Element key={index}>
                                        {skill}
                                    </Element>
                                ))}
                            </ElementsList>
                        </Card>


                        <Card animationBottom>
                            <CardTitle>Languages</CardTitle>
                            <ElementsList columns >
                                {Languages.map((language) => (
                                    <IconsWrapper poem >
                                        <FlagImage src={language.flagSrc} />
                                        <Caption>{language.level}</Caption>
                                    </IconsWrapper>
                                ))}
                            </ElementsList>
                        </Card>

                        <Card animationRight>
                            <CardTitle>Softwares</CardTitle>
                            <ElementsList columns>
                                {Softwares.map((software) => (
                                    <IconsWrapper poem >
                                        <SoftwareIcon src={software.iconSrc} />
                                        <Caption>{software.caption}</Caption>
                                    </IconsWrapper>
                                ))}
                            </ElementsList>
                        </Card>
                    </ContentWrapper>

                    <TitleWrapper >
                        <Title rightvariant> Skillset </Title>
                    </TitleWrapper>
                </>)}
        </Wrapper >
    );
};

