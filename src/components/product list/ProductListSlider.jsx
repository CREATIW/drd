import React, { useEffect } from 'react'
import { SwiperSlide, Swiper } from 'swiper/react'
import { Box } from '../index'
import { Container } from '../GlobalStyles'
import ProductCardOne from '../product cards/ProductCardOne'
import { useDispatch, useSelector } from 'react-redux'
import { GetRecommendedProducts } from '../../redux/reducers/productsReducer'
import SectionTitle from '../SectionTitle'
import styled from 'styled-components'

function ProductListSlider() {
  const { recommendedProducts, loading } = useSelector(state => state.productState)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(GetRecommendedProducts())
  }, [])
  return (
    <Box>
      <Container>
      <SectionTitle title='В Тренде'/>
        {
          loading ? <h1>Loading...</h1> : <StyledSwiper slidesPerView={5}
            spaceBetween={40}>
            {
              recommendedProducts.map((product) => (
                <SwiperSlide key={product.id}>
                  <ProductCardOne product={product} />
                </SwiperSlide>
              ))
            }
          </StyledSwiper>
        }
      </Container>
    </Box>
  )
}

export default ProductListSlider

const StyledSwiper = styled(Swiper)`
    padding: 10px;
`