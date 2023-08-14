import React from 'react';
import { Title, TitleWrapper, Wrapper } from '../../common/commonElements';
import { DataWrapper, Description, Information, InformationsWrapper, Photo, Circle, } from './styledAbout';
import photo from '../../common/Images/borded.png';
import { ContentWrapper } from './styledAbout';
import { informations } from './informations';

export const About = () => {
    return (

            <Wrapper leftvariant>
                <TitleWrapper>
                    <Title leftvariant> About Me </Title>
                </TitleWrapper>

                <ContentWrapper>
                    <Circle>
                        <InformationsWrapper>
                            {informations.map((information, index) => (
                                <DataWrapper>
                                    <Information title={information.id === 1} > {information.title}: </Information>
                                    <Information title={information.id === 1} changeColor> {information.data}</Information>
                                </DataWrapper>
                            ))}


                            <Description>
                                I'm an enthusiastic Frontend Developer with a strong passion for new technologies and a deep commitment to learning React. I am highly motivated and thrive on being a fast learner. Currently, I am actively seeking new job opportunities to further enhance my skills and contribute to innovative projects.
                            </Description>
                        </InformationsWrapper>
                    </Circle>

                    <Photo src={photo} alt='Profile photo' />
                </ContentWrapper>
            </Wrapper>       

    );
};

