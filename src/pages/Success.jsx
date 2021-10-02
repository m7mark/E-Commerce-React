import { useLocation } from 'react-router';
import styled from 'styled-components';

const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Wrapper = styled.div`
    width: 120;
    border-radius: 5;
    padding: 20px;
    background-color: black;
    color: white;
`
export const Success = () => {
  const location = useLocation()
  console.log(location);
  return (
    <Container>
      <Wrapper>
        Success
      </Wrapper>
    </Container>
  );
};