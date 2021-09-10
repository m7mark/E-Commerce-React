import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";

const Container = styled.div`
    display: flex;
    padding: 20px;
    flex-wrap: wrap;
    justify-content: space-between;
`

const Products = () => {
    return (
        <Container>
            {popularProducts.map(prod => (
                <Product key={prod.id} prod={prod} />
            ))}
        </Container>
    );
};

export default Products;