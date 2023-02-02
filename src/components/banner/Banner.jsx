import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { Box, Container, Img } from "../index";
import { SliderPrevIcon, SliderNextIcon } from "../../assets/icons";
import styled from "styled-components";
import { colors } from "../../helpers/colors";
import { useDispatch, useSelector } from "react-redux";
import { GetBanners } from "../../redux/reducers/bannerReducer";
import Skeleton from "react-loading-skeleton";

function Banner() {
  const { banners, loading } = useSelector((state) => state.bannerState);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetBanners());
  }, []);
  return (
    <Box my={20}>
      <Container>
        <Wrapper>
          {loading ? (
            <BannerSkeleton baseColor="#ebebeb" highlightColor="#fff" />
          ) : (
            <StyledSwiper
              modules={[Navigation, Pagination]}
              navigation={{
                prevEl: ".prev",
                nextEl: ".next",
              }}
              pagination={{ clickable: true }}
              loop={{ clickable: true }}
              slidesPerView={1}
              spaceBetween={10}
            >
              {banners.map((item) => (
                <SwiperSlide key={item.id}>
                  <BannerSlideWrapper>
                    <Img src={item.image} alt="banner img" objectfit="cover" />
                  </BannerSlideWrapper>
                </SwiperSlide>
              ))}
              <SliderArrow direction="left" className="prev">
                <SliderPrevIcon />
              </SliderArrow>
              <SliderArrow direction="right" className="next">
                <SliderNextIcon />
              </SliderArrow>
            </StyledSwiper>
          )}
        </Wrapper>
      </Container>
    </Box>
  );
}

export default Banner;

const BannerSlideWrapper = styled(Box)`
  height: 340px;
  border-radius: 20px;
  overflow: hidden;
`;

const StyledSwiper = styled(Swiper)`
  & .swiper-pagination-bullet {
    width: 8px;
    height: 8px;
    background-color: ${colors.white};
    opacity: 1;
    transition: all 0.3s ease;
  }
  & .swiper-pagination-bullet-active {
    width: 38px;
    height: 8px;
    border: none;
    background-color: ${colors.blue["700"]};
    border-radius: 10px;
  }
`;

const SliderArrow = styled.button`
  position: absolute;
  top: 50%;
  ${(props) => (props.direction === "left" ? "left: 15px;" : "right: 15px;")}
  width: 58px;
  height: 58px;
  transform: translateY(-50%);
  z-index: 1;
  background-color: #dededee1;
  backdrop-filter: blur(10px);
  border-radius: 50%;
`;
const BannerSkeleton = styled(Skeleton)`
  height: 340px;
  border-radius: 30px;
`;
const Wrapper = styled.div`
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  height: 340px;
  border-radius: 30px;
`;
