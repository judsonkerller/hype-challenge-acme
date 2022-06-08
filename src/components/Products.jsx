import styled from "styled-components"
import { popularProducts } from "../data";
import Product from "./Product";
import randomTitle from "../helpers/random-title"
import React from "react";


const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = () => {
  React.useEffect(() => {
    popularProducts.map((item) => 
      {item.title = randomTitle()
        return item;
      },
    )
  })

  return (
    <Container>
        {popularProducts.map((item) => (
        
        <Product item={item} key={item.id}/>
      ))}
    </Container>
  )
}

export default Products