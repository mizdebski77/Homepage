import React from 'react';
import { Category, Color, ContentWrapper, Info, InfoWrapper } from './styledEducation';
import { informationData } from './educationData';
import { Title, TitleWrapper, Wrapper } from '../../common/commonElements';


export const Education = () => {

  return (
    <Wrapper leftvariant id="education">

      <TitleWrapper>
        <Title smaller leftvariant>Education</Title>
      </TitleWrapper>

      <ContentWrapper>
        {informationData.map((categoryData, index) => (
          <InfoWrapper>
            <Category>{categoryData.category}</Category>
            {categoryData.data.map((info, infoIndex) => (
              <Info key={infoIndex}>
                {info.text} <Color>{info.date}</Color>
              </Info>
            ))}
          </InfoWrapper>
        ))}
      </ContentWrapper>
    </Wrapper>
  );
};

