import { React } from "react";
import styled from "styled-components";
import { Container, Span, Flex, SemiSpan } from "../index";
import { LocationIcon, ArrowIcon } from "./../../assets/icons";
import { colors } from "../../helpers/colors";

function HeaderTop() {
  return (
    <Wrapper>
      <Container>
        <Row>
          <Flex gap={20} alignItems="center">
            <StyledBtn>
              <Span> 0% Рассрочка</Span>
            </StyledBtn>
            <Span color={colors.white}>Пункт выдачи</Span>
            <Flex alignItems="center">
              <LocationIcon />
              <Span color={colors.white}>г.Ургенч</Span>
            </Flex>
          </Flex>
          <Flex gap={20} alignItems="center">
            <UnderlineText>Часто задаваемые вопросы</UnderlineText>
            <StyledBtn>
              <Span>Заказать звонок</Span>
            </StyledBtn>
            <Flex alignItems="center" gap={5}>
              <SemiSpan color={colors.white}>UZ</SemiSpan>
              <ArrowIcon />
            </Flex>
          </Flex>
        </Row>
      </Container>
    </Wrapper>
  );
}

export default HeaderTop;

const Wrapper = styled.div`
  display: block;
  position: relative;
  padding: 9px 0;
  background-color: ${colors.blue["600"]};
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledBtn = styled.div`
  background-color: ${colors.white};
  border-radius: 10px;
  font-weight: 400;
  font-size: 16px;
  line-height: 130%;
  color: ${colors.black};
  padding: 5px 30px;
`;

const UnderlineText = styled.span`
  text-decoration: underline;
  color: ${colors.white};
`
