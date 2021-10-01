import {
  useEffect,
  useState,
} from 'react';

import axios from 'axios';
import styled from 'styled-components';

import { Product } from './Product';

const Container = styled.div`
  display: flex;
  padding: 20px;
  flex-wrap: wrap;
  justify-content: space-between;
`

export const Products = ({ cat, filters, sort }) => {

  const [products, setProducts] = useState([]);
  const [filteredProduct, setFilteredProduct] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(cat
          ? `http://localhost:5000/api/products?category=${cat}`
          : 'http://localhost:5000/api/products'
        )
        setProducts(res.data)
      } catch (err) { }
    }
    getProducts()
  }, [cat]);

  useEffect(() => {
    cat && setFilteredProduct(
      products.filter(item =>
        Object.entries(filters).every(([key, value]) =>
          item[key].includes(value)
        )
      )
    )
  }, [products, cat, filters]);

  useEffect(() => {
    if (sort === 'newest') {
      setFilteredProduct((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      )
    } else if (sort === 'asc') {
      setFilteredProduct((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      )
    } else if (sort === 'desc') {
      setFilteredProduct((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      )
    }
  }, [sort]);

  return (
    <Container>
      {cat
        ? filteredProduct.map(prod => (
          <Product key={prod._id} prod={prod} />
        ))
        : products
          .slice(0, 8)
          .map(prod => (
            <Product key={prod._id} prod={prod} />
          ))
      }
    </Container>
  );
};