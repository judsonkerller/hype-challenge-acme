import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import RoomIcon from '@mui/icons-material/Room';
import PaidIcon from '@mui/icons-material/Paid';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import styled from "styled-components";
import { mobile } from "../responsive"

const Container = styled.div`
  display: flex;
  margin: 20px;
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
`;

const Logo = styled.h1`

`;

const Desc = styled.p`
  margin: 20px 0;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${props => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;


const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  letter-spacing: 2px;
`;

const PaymentItem = styled.button`
  font-size: 14px;
  border: none;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  margin-left: -4px;
  cursor: pointer;
  letter-spacing: 2px;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>ACME Inc</Logo>
        <Desc>
          ACME Incorporated é uma sociedade fictícia que existe no universo dos filmes e animações. Os primeiros produtos a saírem das fábricas foram rolhas de cortiça. A marca foi vista pela primeira vez em 1923 na comédia Safety Last! com Harold LLoyd, depois em 1933 no desenho animado "Buddy's Bug Hunt".
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="0E76A8">
            <LinkedIn />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Links Úteis</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Minha Conta</ListItem>
          <ListItem>Carrinho de Compras</ListItem>
          <ListItem>Lista de Desejos</ListItem>
          <ListItem>Rastrear Pedido</ListItem>
          <ListItem>Termos</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contato</Title>
        <ContactItem>
          <RoomIcon style={{marginRight:"10px"}}/> 9497 Harvard Blvd, Youngstown
        </ContactItem>
        <ContactItem>
          <LocalPhoneIcon style={{marginRight:"10px"}}/>+55 84 98831-3543
        </ContactItem>
        <ContactItem>
          <EmailIcon style={{marginRight:"10px"}}/>judsonkerller@gmail.com
        </ContactItem>
        <PaymentItem>
          <PaidIcon style={{marginRight:"10px"}}/>buymeacoffee.com/judin
        </PaymentItem>
      </Right>
    </Container>
  )
}

export default Footer