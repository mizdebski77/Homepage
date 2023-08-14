import React from 'react';
import { Title, TitleWrapper, Wrapper } from '../../common/commonElements';
import { Card, CardTitle, ContentWrapper, ElementsList, Element, IconsWrapper, FlagImage, Caption, SoftwareIcon } from './styledSkills';
import { Languages, Skillset, Softwares } from './skillset';

export const Skills = () => {
    return (
        <Wrapper rightvariant>
            <ContentWrapper>
                <Card>
                    <CardTitle>Skills</CardTitle>
                    <ElementsList>
                        {Skillset.map((skill, index) => (
                            <Element key={index}>
                                {skill}
                            </Element>
                        ))}
                    </ElementsList>
                </Card>


                <Card>
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

                <Card>
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
        </Wrapper >
    );
};

