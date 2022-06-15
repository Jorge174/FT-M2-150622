import React from 'react';
import styled from 'styled-components';

const Otro = styled.p`
  color: white;
`

const Producto = styled.div`
  color: salmon;
  font-size: 20px;
  & h3 {
    background-color: SpringGreen; 
  }
`;

const Titulo = styled.h3`
  font-size: 30px;
  &:hover {
    color: green;
  }
`;

function Product(props) {
  return (
    <Producto>
      <Titulo>{props.title}</Titulo>
      <Otro><p>{props.price}</p></Otro>
    </Producto>
  );
}

export default Product;
