import styled from "styled-components";
import { categories } from "../data";
import CategoryItem from "./CategoryItem";

const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
`

const Categories = () => {
    return (
        <Container>
            {categories.map(catg => (
                <CategoryItem key={catg.id} catg={catg} />
            ))}
        </Container>
    );
};

export default Categories;