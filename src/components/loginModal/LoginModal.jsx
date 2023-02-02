import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { CloseIcon } from '../../assets/icons'
import { colors } from '../../helpers/colors'
import { LoginModalCloseAC } from '../../redux/reducers/modalReducer'
import { PostUser, PostUserVerify } from '../../redux/reducers/userReducer'
import { Box, Flex, H4, H5, Small, Span } from '../index'

function LoginModal() {
  const { loginModal } = useSelector(state => state.modalState)
  const { isCode ,loading} = useSelector(state => state.userState)
  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [code, setCode] = useState('')
  const [data, setData] = useState({email: '', code: ''})
  const [errors, setErrors] = useState({email: false, code: false})

  const handleLoginInput = (e) => {
    const {name, value} = e.target
    setData({...data, [name]: value})
    setEmail(e.target.value)
    setErrors({...errors, [name]: false})
  }
  const handleLoginBtn = () => {
    if(isCode) {
      if(data.code.length !== 4) {
        setErrors({...errors, code: true})
      } else {
        dispatch(PostUserVerify(data))
      }
    }else {
      const re = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/
      if(!re.test(data.email) ) {
        setErrors({...errors, email: true})
      }else {
        dispatch(PostUser(data.email))
        dispatch(PostUserVerify())
      }
    }

  }

  const handleCloseBtn = () => {
    dispatch(LoginModalCloseAC())
  }
  return (
    <Wrapper open={loginModal}>
      <H4 mb={20}>Войти / Регистрация</H4>
    <CloseBtn onClick={handleCloseBtn}>
          <CloseIcon/>
    </CloseBtn>

      <Flex mb={20} flexDirection='column'>
        <Span mb={10}>{isCode ? `Код с подтверждением выслан на email: ${data.email}`: 'Email'}</Span>
        {
          isCode ? <LoginInput type='text' value={data.code} name='code' error={errors.code} placeholder='4 значный код' onChange={handleLoginInput}/> :
          <LoginInput type='email' value={data.email} name='email' error={errors.email} placeholder='fakeemail@gmail.com' onChange={handleLoginInput}/>
        }
      </Flex>
      <Box>
        <LoginBtn onClick={handleLoginBtn} disabled={loading}>
         <H5 color={colors.white}>{loading? 'loading...' : isCode ? 'Продолжить' : 'Получить код'} </H5>
        </LoginBtn>
      </Box>
    </Wrapper>
  )
}

export default LoginModal

const Wrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    max-width: 400px;
    transform: translate(-50%, -50%);
    background-color: ${colors.white};
    border-radius: 10px;
    padding: 30px 18px;
    visibility: ${(props) => props.open ? 'visible' : 'hidden'};
    transition: all 0.3s ease;
    z-index: 100;
`
const LoginInput = styled.input`
  width: 100%;
  min-width: 300px;
  padding: 10px 15px;
  background: #f8f8f8;
  border: ${(props) => props.error ? '0.5px solid red' : '0.5px solid #b6b6b6'};
  border-radius: 10px;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: ${colors.black};
  outline: none;
  &::placeholder {
    color: #9d9d9d
  }
`
const LoginBtn = styled.button`
  width: 100%;
  background-color: ${colors.blue['600']};
  border-radius: 10px;
  padding: 8px;
  border: 1px solid ${colors.blue['600']};
  transition: all 0.3s ease;

  &:hover {
    background-color: transparent;
    h5 {
      color: ${colors.blue['600']}
    }
  }
`

const CloseBtn = styled.button`
  position: absolute;
  top: 7px;
  right: 7px;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-color: #A5A5A5;
  border-radius: 50%;
`