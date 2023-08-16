import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchRepos } from '../../core/getProjects';
import { CustomSwiper, Description, Caption, LinksWrapper, ProjectTitle, Projectlink, CustomSlide, Container } from './styledPortfolio';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, EffectCoverflow, Scrollbar, Pagination } from 'swiper/modules';
import { Title, TitleWrapper, Wrapper } from '../../common/commonElements';
import { useInView } from 'react-intersection-observer';


interface Repo {
    id: number;
    description: string;
    name: string;
    homepage: string;
    html_url: string;
}

export const Porfolio = () => {
    const { data } = useQuery<Repo[]>(
        ["projects"],
        fetchRepos
    );
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
        <Wrapper rightvariant id="portfolio" ref={ref}>
            {inView && (
                <>

                    <CustomSwiper<React.ComponentType<any>>

                        breakpoints={{
                            900: {
                                slidesPerView: 3,
                                spaceBetween: 40,

                            },
                        }}

                        effect={'coverflow'}
                        centeredSlides={true}
                        slidesPerView={1}
                        modules={[Navigation, Scrollbar, EffectCoverflow, Pagination]}
                        spaceBetween={40}
                        grabCursor={true}
                        pagination={{
                            clickable: true,
                        }}
                        navigation
                        coverflowEffect={{
                            rotate: 50,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: true,
                        }}
                    >

                        {data && data.map((repo) => (
                            <CustomSlide key={repo.id}>
                                <Container>
                                    <ProjectTitle>{repo.name}</ProjectTitle>
                                    <Description>{repo.description}</Description>
                                    <LinksWrapper>
                                        <Caption>Repository:</Caption>
                                        <Projectlink href={repo.html_url} target='_blank'>{repo.html_url}</Projectlink>
                                    </LinksWrapper>
                                    <LinksWrapper>
                                        <Caption>Website:</Caption>
                                        <Projectlink href={repo.homepage} target='_blank'>{repo.homepage}</Projectlink>
                                    </LinksWrapper>
                                </Container>
                            </CustomSlide>
                        ))}
                    </CustomSwiper>
                    <TitleWrapper>
                        <Title rightvariant smaller>Portfolio</Title>
                    </TitleWrapper>
                </>)}
        </Wrapper >
    );
};

