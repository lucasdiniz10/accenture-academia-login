import React, { useEffect } from 'react';
import CardProduct from '../../components/CardProduct';
import Container from '../../components/Container';
import { useProduct } from '../../hooks/contexts/ProductProvider';

import { Styled } from './styles';

function Home() {
  const { products, getProducts } = useProduct();

  useEffect(() => {
    getProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  console.log(products)

  return (
    <Container title="Home" size="lg">
      <Styled.CardWrapper>
        {products.map(product => (
          <CardProduct
            key={product.id}
            product={product}
          />
        ))}
      </Styled.CardWrapper>
    </Container>
  );
}

export default Home;