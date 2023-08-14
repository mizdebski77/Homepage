import React from 'react';
import { Category, Color, ContentWrapper, Info, InfoWrapper } from './styledEducation';
import { informationData } from './educationData';
import { Title, TitleWrapper, Wrapper } from '../../common/commonElements';
import { useInView } from 'react-intersection-observer';


export const Education = () => {

  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '0px 0px -70% 0px',
  });

  return (
    <Wrapper leftvariant id="education" ref={ref}>
      {inView && (
        <>
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
        </>)}
    </Wrapper>
  );
};

