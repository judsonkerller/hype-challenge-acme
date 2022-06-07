import styled from "styled-components";
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import Products from "../components/Products"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
`;

const FilterText = styled.span`
  font-size: 16px;
  font-weight: 600;
  margin-right: 10px;
`;

const Select = styled.select`
  padding: 3px;
  margin-right: 20px;
`;

const Option = styled.option``;

const ProductList = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>Clothes</Title>
      <FilterContainer>
        <Filter><FilterText>Filtrar produtos por:</FilterText>
          <Select>
            <Option disable selected>Cor</Option>
            <Option>Branco</Option>
            <Option>preto</Option>
            <Option>Vermelho</Option>
            <Option>Amarelo</Option>
            <Option>Azul</Option>
          </Select>
          <Select>
            <Option disable selected>Tamanho</Option>
            <Option>PP</Option>
            <Option>P</Option>
            <Option>M</Option>
            <Option>G</Option>
            <Option>GG</Option>
          </Select>
        </Filter>
        <Filter><FilterText>Classificar por:</FilterText>
          <Select>
            <Option selected>Mais popular</Option>
            <Option>Menor preço</Option>
            <Option>Maior preço</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  )
}

export default ProductList