import { useState } from "react";
import { useCookies } from "react-cookie";
import { Redirect } from "react-router";
import { toast } from "react-toastify";
import styled from "styled-components";
import { instance } from "../../api/AxiosConfig";
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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [cookies, setCookies] = useCookies();

  const signIn = () => {
    instance
      .post("login", {
        email: email,
        password: password,
      })
      .then((response) => {
        setCookies("userType", response.data.user_type);
        setCookies("token", response.data.access_token);
        setCookies("id", response.data.id);
        setRedirect(true);
      })
      .catch(() => {
        toast.error("Credenciais inválidas.");
      });
  };

  if (redirect === true) {
    return <Redirect to="/voting" />;
  }

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
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          signIn();
        }}
      >
        <BaseFormLegend>Login</BaseFormLegend>
        <BaseInput
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          sizeW={`100%`}
          type="email"
          placeholder="Email"
          required
        />
        <BaseInput
          onChange={(e) => {
            setPassword(e.target.value);
          }}
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
