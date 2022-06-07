import styled from "styled-components"

const Container = styled.div``;

const Wrapper = styled.div``;

const Title = styled.div``;

const Form = styled.div``;

const Input = styled.div``;

const Agreement = styled.div``;

const Button = styled.div``;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CRIANDO UMA CONTA</Title>
        <Form>
          <Input placeholder="Nome"/>
          <Input placeholder="Sobrenome"/>
          <Input placeholder="Nome de usuário"/>
          <Input placeholder="Email"/>
          <Input placeholder="Senha"/>
          <Input placeholder="Confirme a senha"/>
          <Agreement>Ao continuar, você concorda com os <b>Termos de Uso</b> e a <b>Política de Privacidade</b> da ACME.</Agreement>
          <Button>Criar conta!</Button>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Register