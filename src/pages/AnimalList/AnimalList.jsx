import styled from "styled-components";
import { baseCard, BaseFormLegend } from "../../components/UI";
import { darkGreen } from "../../components/UI/variables";
import { useState, useEffect } from "react";
import { instance } from "../../api/AxiosConfig";
import { toast } from "react-toastify";

const ContainerCard = styled.div`
  ${baseCard};

  width: 70%;
`;

const Table = styled.table`
  border: 1px solid ${darkGreen};
  border-collapse: collapse;

  thead {
    background-color: ${darkGreen};
    line-height: 2em;

    th {
      text-align: left;
    }
  }
`;

const AnimalList = () => {
  const [animalList, setAnimalList] = useState([]);

  useEffect(() => {
    instance
      .get("animal")
      .then((response) => {
        setAnimalList(response.data);
      })
      .catch(() => {
        toast.error("Erro ao buscar animais.");
      });
  }, []);

  return (
    <ContainerCard>
      <BaseFormLegend as="span">Lista de Animais</BaseFormLegend>
      <Table>
        <thead>
          <tr>
            <th>Apelido</th>
            <th>Likes</th>
            <th>Dislikes</th>
            <th>Esta habilitado</th>
          </tr>
        </thead>
        <tbody>
          {animalList.map((animal) => (
            <tr key={animal}>
              <td>{animal.nickname}</td>
              <td>{animal.likes}</td>
              <td>{animal.dislikes}</td>
              <td>{animal.is_enabled}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </ContainerCard>
  );
};

export default AnimalList;
