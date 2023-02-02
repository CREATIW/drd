import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import {
  CategoryIcon,
  LogoIcon,
  SearchIcon,
  SquareIcon,
  HeartIcon,
  CartIcon,
  ProfileIcon,
  AvatarIcon,
} from "../../assets/icons";
import { colors } from "../../helpers/colors";
import {
  CategoryOpenAC,
  LoginModalOpenAC,
} from "../../redux/reducers/modalReducer";
import { Box, Container, Flex, SemiSpan, Span } from "../index";
import useAuth from "./../../hooks/useAuth";

function HeaderMain() {
  const { loginModal } = useSelector((state) => state.modalState);
  const dispatch = useDispatch();
  const isLogin = useAuth();
  const navigate = useNavigate();

  const handleProfileBtn = () => {
    if (!isLogin) {
      dispatch(LoginModalOpenAC());
    }
  };

  const handleCartButton = () => {
    navigate("/cart");
  };

  return (
    <Wrapper>
      <Container>
        <Flex alignItems="center">
          <Box mr={64}>
            <Link to="/">
              <LogoIcon />
            </Link>
          </Box>

          <Flex>
            <CategoryMenuBtn onClick={() => dispatch(CategoryOpenAC())}>
              <CategoryIcon />
              <Span color={colors.white}>Категории</Span>
            </CategoryMenuBtn>
          </Flex>

          <SearchWrapper>
            <SearchInput placeholder="Введите запрос..." />
            <SearchBtn>
              <SearchIcon />
            </SearchBtn>
          </SearchWrapper>
          <BtnsWrapper>
            <MyOrdersBtn>
              <SquareIcon />
              <SemiSpan>Мои заказы</SemiSpan>
            </MyOrdersBtn>
            <FavoritesBtn>
              <HeartIcon />
              <SemiSpan>Избранное</SemiSpan>
            </FavoritesBtn>
            <CartButtonWrapper onClick={handleCartButton}>
              <CartIcon />
              <SemiSpan color={colors.black}>Корзина</SemiSpan>
            </CartButtonWrapper>
            <RegisterBtn onClick={handleProfileBtn}>
              {isLogin ? <AvatarIcon /> : <ProfileIcon />}
              <SemiSpan color={colors.white}>
                {isLogin ? "Профиль" : "Регистрация"}
              </SemiSpan>
            </RegisterBtn>
          </BtnsWrapper>
        </Flex>
      </Container>
    </Wrapper>
  );
}

export default HeaderMain;

const Wrapper = styled.div`
  padding: 16px 0;
  background-color: ${colors.white};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;
const CategoryMenuBtn = styled.button`
  width: 160px;
  height: 36px;
  background-color: ${colors.blue["600"]};
  border-radius: 0px 20px 0px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 3px 0;
`;
const SearchWrapper = styled.div`
  width: 450px;
  display: flex;
  align-items: center;
  overflow: hidden;
  margin: 0 14px;
  border: 1px solid ${colors.blue["700"]};
  border-radius: 10px;
`;
const SearchInput = styled.input`
  border: none;
  outline: none;
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  line-height: 24px;
  flex-grow: 1;
  padding: 6px 0 6px 26px;
  &::placeholder {
    color: #bebebe;
  }
`;
const SearchBtn = styled.button`
  width: 62px;
  height: 36px;
  background-color: ${colors.blue["700"]};
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const RegisterBtn = styled.button`
  background-color: ${colors.blue["500"]};
  border: 1px solid ${colors.blue["500"]};
  border-radius: 5px;
  padding: 3px 13px 3px 3px;
  display: flex;
  align-items: center;
  transition: all 0.3s;
  gap: 8px;
  &:hover {
    background-color: transparent;
    span {
      color: ${colors.blue["500"]};
    }
    svg circle,
    ellipse {
      stroke: ${colors.blue["500"]};
    }
  }
`;
const BtnsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;
const CartButtonWrapper = styled.button`
  padding: 3px 13px 3px 3px;
  display: flex;
  align-items: center;
  gap: 5px;
  border-radius: 5px;
  border: 1px solid transparent;
  transition: all 0.3s ease;

  &:hover {
    border: 1px solid ${colors.blue[500]};
  }
`;
const MyOrdersBtn = styled.div`
  display: flex;
  align-items: center;
  border-radius: 5px;
  padding: 3px 13px 3px 3px;
  gap: 5px;
  border: 1px solid transparent;
  transition: all 0.3s ease;
  &:hover {
    border: 1px solid ${colors.blue[500]};
  }
`
const FavoritesBtn = styled.div`
  padding: 3px 13px 3px 3px;
  display: flex;
  align-items: center;
  gap: 5px;
  border-radius: 5px;
  border: 1px solid transparent;
  transition: all 0.3s ease;
  &:hover {
    border: 1px solid ${colors.blue[500]};
  }
`
