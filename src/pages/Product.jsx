import styled from "styled-components"
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { mobile } from '../responsive'

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection: "column" })};
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: "40vh" })};
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })};
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 70%;
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })};
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
  ${mobile({ fontSize: "15px" })};
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props=>props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterModel = styled.select`
  margin-left: 10px;
  padding: 3px;
`;

const FilterModelOption = styled.option``;

const AddContainer = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1.5px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 10px;
  border: 1.5px solid teal;
  background-color: #fff;
  cursor: pointer;
  font-weight: 500;
  transition:all 0.5s ease;
  &:hover{
    background-color: #f8f4f4;
  }
`;



const Product = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src="https://picsum.photos/id/6/650/940" />
        </ImgContainer>
        <InfoContainer>
          <Title>MacBook Air</Title>
          <Desc>O macOS é o sistema operacional para computadores mais avançado do mundo. O macOS Big Sur traz um novo design e atualizações importantes para os apps, levando o macOS a um novo nível de potência e beleza.</Desc>
          <Price>R$ 13.299,00</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Cor</FilterTitle>
              <FilterColor color="black"/>
              <FilterColor color="gold"/>
              <FilterColor color="gray"/>
              <FilterColor color="silver"/>
            </Filter>
            <Filter>
              <FilterTitle>Modelo</FilterTitle>
              <FilterModel>
                <FilterModelOption>com chip M1</FilterModelOption>
                <FilterModelOption>com chip M2
                </FilterModelOption>
              </FilterModel>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <RemoveIcon />
              <Amount>1</Amount>
              <AddIcon />
            </AmountContainer>
            <Button>Adicionar ao carrinho</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  )
}

export default Product