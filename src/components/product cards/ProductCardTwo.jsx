import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { CloseIcon } from '../../assets/icons'
import { colors } from '../../helpers/colors'
import { AddProductToCart, DeleteCartProduct, RemoveCartProduct } from '../../redux/reducers/cartReducer'
import {Counter} from '../index'
import { Flex, H4, Img, Span } from '../index'


function ProductCardTwo({product}) {
    const {image, name_uz, price, product_id, qty} = product
    const dispatch = useDispatch()
    const handleRemoveButton = () => {
        dispatch(RemoveCartProduct(product_id))
    }
    const handleIncrementButton = () => {
        dispatch(AddProductToCart(product_id, 1))
    }
    const handleDecrementButton = () => {
        dispatch(DeleteCartProduct(product_id))
    }
  return (
    <Wrapper>
        <ImageWrap>
            <Img src={image} alt={name_uz} objectFit='contain'/>
        </ImageWrap>
        <Content>
    <Flex alignItems='center' justifyContent='space-between' mb='14px'>
        <Span>{name_uz}</Span>
        <RemoveButton onClick={handleRemoveButton}>
            <CloseIcon/>
        </RemoveButton>
    </Flex>
    <Flex mb={14}>
        <Counter qty={qty} incrementButton={handleIncrementButton} decrementButton={handleDecrementButton}/>
    </Flex>
<Flex gap={24}>
    <Flex gap={14}>
        <Span>Сумма: </Span>
        <H4>{Number(price).toLocaleString()}UZS</H4>
    </Flex>
    <Flex gap={14}>
        <Span>Сумма доставки: </Span>
        <H4>{Number(0).toLocaleString()}UZS</H4>
    </Flex>
</Flex>
        </Content>
    </Wrapper>
  )
}

export default ProductCardTwo

const Wrapper = styled.div`
    display: flex;
    align-items: flex-start;
    background-color: ${colors.white};
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
    border-radius: 10px;
    padding: 8px;
    margin-bottom:  15px;
    gap: 30px;
`
const ImageWrap = styled.div`
    width: 95px;
    height: 105px;
    border-radius: 10px;
    overflow: hidden;
`
const Content = styled.div`
    flex: 1 1 auto;
`
const RemoveButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #A5A5A5;
`