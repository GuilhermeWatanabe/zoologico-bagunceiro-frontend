import { useState } from "react";
import styled from "styled-components";
import { BaseFormLegend, BaseInput, BaseButton, baseCard } from "../UI";
import { instance } from "../../api/AxiosConfig";
import { toast } from "react-toastify";
import { Redirect } from "react-router-dom";

const Form = styled.form`
  ${baseCard};
`;

const NewAnimal = () => {
  const [nickname, setNickname] = useState("");
  const [sciName, setSciName] = useState("");
  const [zooWing, setZooWing] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState();
  const [redirect, setRedirect] = useState(false);

  const registerAnimal = () => {
    const form = new FormData();
    form.append("nickname", nickname);
    form.append("scientific_name", sciName);
    form.append("zoo_wing", zooWing);
    form.append("email", email);
    form.append("password", password);
    form.append("image", image);

    instance
      .post("animal", form, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((response) => {
        console.log(response);
        toast.success("Cadastrado com sucesso!");
        setRedirect(true);
      })
      .catch((error) => {
        console.log(error);
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
        registerAnimal();
      }}
    >
      <BaseFormLegend>Novo Animal</BaseFormLegend>
      <BaseInput
        onChange={(e) => {
          setNickname(e.target.value);
        }}
        sizeW={`100%`}
        type="text"
        placeholder="Apelido"
        required
      />
      <BaseInput
        onChange={(e) => {
          setSciName(e.target.value);
        }}
        sizeW={`100%`}
        type="text"
        placeholder="Nome científico"
        required
      />
      <BaseInput
        onChange={(e) => {
          setZooWing(e.target.value);
        }}
        sizeW={`100%`}
        type="text"
        placeholder="Ala do Zoológico"
        required
      />
      <BaseInput
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        sizeW={`100%`}
        type="email"
        placeholder="E-mail"
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
      <input
        onChange={(e) => {
          setImage(e.target.files[0]);
        }}
        type="file"
        required
      />
      <BaseButton type="submit">Cadastrar</BaseButton>
    </Form>
  );
};

export default NewAnimal;
