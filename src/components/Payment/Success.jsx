import styled from "styled-components";

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
const Success = () => {
    return (
        <Container>
            <Wrapper>
                Success
            </Wrapper>
        </Container>
    );
};

export default Success;