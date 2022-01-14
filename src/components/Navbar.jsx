import React from 'react';

import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Badge from '@material-ui/core/Badge';
import {
  Search,
  ShoppingCartOutlined,
} from '@material-ui/icons';

import { mobile } from '../responsive';
import { LinkTo } from './CommonElements';

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  ${mobile({ display: "none" })}
`
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`
const SearchContainer = styled.div`
  border: 0.5px solid lightgrey;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`
const Input = styled.input`
  border: none;
  -webkit-appearance: none;
  outline: none;
`
const SearchIcon = styled(Search)`
  color: gray;
  font-size: 16px !important;
`
const Center = styled.div`
  flex: 1;
  text-align: center;
  ${mobile({ textAlign: 'left' })}
`
const Logo = styled.h1`
  font-weight:bold;
  ${mobile({ fontSize: "24px" })}
`
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  white-space: nowrap;
  ${mobile({ fontSize: "12px" })}
`


const Navbar = () => {
  const quantity = useSelector(state => state.cart.quantity)

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="search" />
            <SearchIcon />
          </SearchContainer>
        </Left>
        <Center>
          <LinkTo to={`/`}>
            <Logo>MARK.</Logo>
          </LinkTo>
        </Center>
        <Right>
          <LinkTo to={'/login'}>
            <MenuItem>Sign In</MenuItem>
          </LinkTo>
          <LinkTo to={'/register'}>
            <MenuItem>Register</MenuItem>
          </LinkTo>
          <Link to='/cart'>
            <MenuItem>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;