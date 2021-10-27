import styled from "styled-components";
import { BaseButton, BaseFormLegend, BaseInput } from "../../components/UI";

const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  height: 500px;
  width: 900px;
`;

const Register = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
`;

const Form = styled.form`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2em;
  width: 50%;
`;

const Login = () => {
  return (
    <Container>
      <Register>
        <a href="/register/animal">
          <BaseButton>Cadastrar novo Animal</BaseButton>
        </a>
        <a href="/register/janitor">
          <BaseButton>Cadastrar novo Zelador</BaseButton>
        </a>
      </Register>
      <Form>
        <BaseFormLegend>Login</BaseFormLegend>
        <BaseInput sizeW={`100%`} type="email" placeholder="Email" required />
        <BaseInput
          sizeW={`100%`}
          type="password"
          placeholder="Senha"
          required
        />
        <BaseButton type="submit">Entrar</BaseButton>
      </Form>
    </Container>
  );
};

export default Login;
