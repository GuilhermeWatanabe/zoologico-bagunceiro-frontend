import { useState, useEffect } from "react";
import styled from "styled-components";
import { BaseFormLegend, BaseInput, BaseButton, baseCard } from "../UI";
import { instance } from "../../api/AxiosConfig";
import { toast } from "react-toastify";
import { Redirect } from "react-router-dom";
import { useCookies } from "react-cookie";

const Form = styled.form`
  ${baseCard};
`;

const AnimalForm = () => {
  const [nickname, setNickname] = useState("");
  const [sciName, setSciName] = useState("");
  const [zooWing, setZooWing] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState();
  const [redirect, setRedirect] = useState(false);
  const [cookies, setCookies] = useCookies();

  useEffect(() => {
    if (cookies.id && cookies.userType !== "janitor") {
      instance
        .get(`animal/${cookies.id}`)
        .then((response) => {
          setNickname(response.data.nickname);
          setSciName(response.data.scientific_name);
          setZooWing(response.data.zoo_wing);
          setEmail(response.data.email);
        })
        .catch(() => {
          toast.error("Erro ao buscar usuário.");
        });
    }
  }, []);

  const editAnimal = () => {
    const form = new FormData();
    form.append("nickname", nickname);
    form.append("scientific_name", sciName);
    form.append("zoo_wing", zooWing);
    form.append("password", password);
    form.append("image", image);

    instance
      .patch("animal", form, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then(() => {
        toast.success("Editado com sucesso!");
      })
      .catch(() => {
        toast.error("Erro ao editar.");
      });
  };

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
      .then(() => {
        toast.success("Cadastrado com sucesso!");
        setRedirect(true);
      })
      .catch(() => {
        toast.error("Erro ao cadastrar.");
      });
  };

  if (redirect === true && !cookies.id) {
    return <Redirect to="/" />;
  }

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        if (cookies.id && cookies.userType !== "janitor") {
          editAnimal();
        } else {
          registerAnimal();
        }
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
        value={nickname}
        required
      />
      <BaseInput
        onChange={(e) => {
          setSciName(e.target.value);
        }}
        sizeW={`100%`}
        type="text"
        placeholder="Nome científico"
        value={sciName}
        required
      />
      <BaseInput
        onChange={(e) => {
          setZooWing(e.target.value);
        }}
        sizeW={`100%`}
        type="text"
        placeholder="Ala do Zoológico"
        value={zooWing}
        required
      />
      <BaseInput
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        sizeW={`100%`}
        type="email"
        placeholder="E-mail"
        value={email}
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

export default AnimalForm;
