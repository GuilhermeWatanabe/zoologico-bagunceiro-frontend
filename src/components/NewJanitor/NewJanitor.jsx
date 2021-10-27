import styled from "styled-components";
import { baseCard, BaseFormLegend, BaseInput, BaseButton } from "../UI";
import { useState } from "react";
import { instance } from "../../api/AxiosConfig";
import { toast } from "react-toastify";
import { Redirect } from "react-router-dom";

const Form = styled.form`
  ${baseCard};
`;

const NewJanitor = ({userId}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const register = () => {
    instance
      .post("janitor", {
        name: name,
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(response);
        toast.success("Cadastrado com sucesso!");
        if(!userId) {
          setRedirect(true);
        }
      })
      .catch((response) => {
        console.log(response);
        toast.error("Erro ao cadastrar.");
      });
  };

  if (redirect === true) {
    return <Redirect to="/login" />;
  }

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
