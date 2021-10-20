import styled from 'styled-components'

export const LoginContainer = styled.div`
  display: flex;
  height: 100vh;
  margin: 20px;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > input {
    padding: 8px;
    font-size: 16px;
    margin-bottom: 20px;
  }
  & > button {
  width: 200px;
  border: none;
  background-color: teal;
  color: white;
  padding: 8px 10px;
  font-weight: 600;
  font-size: 16px;
  border-radius: 10px;
  cursor: pointer;
  }
`