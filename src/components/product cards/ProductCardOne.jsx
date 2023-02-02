import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { VerifyIcon } from "../../assets/icons";
import { colors } from "../../helpers/colors";
import { GetProduct } from "../../redux/reducers/productsReducer";
import { Box, Flex, H5, H6, Img, Small } from "../index";

function ProductCardOne(props) {
  const dispatch = useDispatch();

  function productHendler(slug) {
    dispatch(GetProduct(slug));
  }
  const { product } = props;
  return (
    <Link
      to={`/product/${product.slug}`}
      onClick={() => productHendler(product.slug)}
    >
      <Wrapper>
        <ProductImg>
          <Img src={product.image} objectFit="contain" />
        </ProductImg>
        <Flex flexGrow={1} flexDirection="column">
          <H6 color="#313030" mb="8px">
            {product.name_uz}
          </H6>
          <Flex alignItems="center" gap={5} mb={10}>
            <VerifyIcon />
            <Small>в наличии</Small>
          </Flex>
        </Flex>
        <PreviusPrice>
          {Number(product.previous_price).toLocaleString()} сум
        </PreviusPrice>
        <H5 mt={10}>{Number(product.price).toLocaleString()} сум</H5>
      </Wrapper>
    </Link>
  );
}

export default ProductCardOne;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.white};
  box-shadow: 0px 4px 10px rgba(73, 118, 232, 0.1);
  border-radius: 10px;
  height: 300px;
  padding: 14px;
`;
const ProductImg = styled.div`
  height: 43%;
  padding: 10px 0;
  text-align: center;
`;
const PreviusPrice = styled.h5`
  padding: 2px 10px;
  background-color: ${colors.blue["600"]};
  color: ${colors.white};
  text-decoration: line-through;
  display: inline;
`;
