import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`
export const RightContainer = styled.div`
  flex: 4;
  padding: 20px;
`
export const HomePageWidgets = styled.div`
  display: flex;
  margin: 20px 20px 20px 0;
`
export const NavLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`
//Common form style
export const CommonEditForm = styled.div`
  display: flex;
  flex-direction: column;

  & > label {
    margin-left: 5px;
    margin-bottom: 10px;
    color: gray;
    font-weight: 600;
  }
  & > input {
    margin-bottom: 10px;
    padding: 5px;
    border: none;
    border-bottom: 1px solid gray;
    outline: none;
    font-size: 14px;
    /* color: grey; */
  }
  & > select {
    width: 150px;
    padding: 5px;
    border: 1px solid gray;
    border-radius: 3px;
    margin-bottom: 10px;
    appearance: none;
    font-size: 14px;
    outline: none;
  }
`