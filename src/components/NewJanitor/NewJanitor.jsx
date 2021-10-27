import styled from "styled-components";
import { baseCard, BaseFormLegend, BaseInput, BaseButton } from "../UI";
import { useState } from "react";
import { instance } from "../../api/AxiosConfig";

const Form = styled.form`
  ${baseCard};
`;

const NewJanitor = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = () => {
    console.log(name, email, password);
    instance
      .post("janitor", {
        name: name,
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((response) => {
        console.log(response);
      });
  };

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        register();
      }}
    >
      <BaseFormLegend>Novo Zelador</BaseFormLegend>
      <BaseInput
        onChange={(e) => {
          setName(e.target.value);
        }}
        type="text"
        placeholder="Nome"
        required
      />
      <BaseInput
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        type="email"
        placeholder="E-mail"
        required
      />
      <BaseInput
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        type="password"
        placeholder="Senha"
        required
      />
      <BaseButton type="submit">Cadastrar</BaseButton>
    </Form>
  );
};

export default NewJanitor;
