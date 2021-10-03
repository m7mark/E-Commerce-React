import { useState } from 'react';

import {
  useDispatch,
  useSelector,
} from 'react-redux';
import styled from 'styled-components';

import { login } from '../redux/apiCalls';
import { mobile } from '../responsive';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Wrapper = styled.div`
  padding: 20px;
  width: 25%;
  background-color: white;
  ${mobile({ width: "75%" })}
`
const Title = styled.h1`
  font-style: 24px;
  font-weight: 300;
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
`
const Input = styled.input`
  flex:1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
  font-size: 16px;
`
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  flood-color: white;
  cursor: pointer;
  margin-bottom: 10px;

  &:disabled {
    color: #4e4e4e;
  }
`
const Link = styled.a`
  font-size: 12px;
  margin: 5px 0;
  text-decoration: underline;
  cursor: pointer;
`
const Error = styled.span`
  color: red;
`

export const Login = () => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const { isFatching, error } = useSelector(state => state.user)

  const handleClick = (e) => {
    e.preventDefault()
    login(dispatch, { username, password })
  }

  return (
    <Container>
      <Wrapper>
        <Title>
          SIGN IN
        </Title>
        <Form>
          <Input
            placeholder="username"
            onChange={e => setUsername(e.target.value)}
          />
          <Input
            placeholder="password"
            type='password'
            onChange={e => setPassword(e.target.value)}
          />
          <Button onClick={handleClick} disabled={isFatching}>LOGIN</Button>
          {error && <Error>Something went wrong</Error>}
          <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};