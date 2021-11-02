import styled from "styled-components";
import { baseCard, BaseFormLegend, NothingToShow } from "../../components/UI";
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

  td,
  th {
    height: 35px;
  }
`;

const AnimalList = () => {
  const [animalList, setAnimalList] = useState([]);

  const disableAnimal = (id) => {
    instance
      .patch(`animal/${id}`)
      .then(() => {
        toast.success("Desabilitado com sucesso.");
        let animalsListCopy = [...animalList];
        let disabledAnimal = animalsListCopy[id - 1];
        disabledAnimal.is_enabled = 0;
        animalsListCopy[id - 1] = disabledAnimal;
        setAnimalList(animalsListCopy);
      })
      .catch(() => {
        toast.error("Erro ao tentar desativar.");
      });
  };

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
          {animalList.length === 0 ? (
            <NothingToShow>Nenhum registro.</NothingToShow>
          ) : (
            animalList.map((animal) => (
              <tr key={animal.id}>
                <td>{animal.nickname}</td>
                <td>{animal.likes}</td>
                <td>{animal.dislikes}</td>
                <td>
                  {animal.is_enabled === 1 ? (
                    <a
                      onClick={() => {
                        disableAnimal(animal.id);
                      }}
                    >
                      Desabilitar
                    </a>
                  ) : (
                    "DESABILITADO"
                  )}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    </ContainerCard>
  );
};

export default AnimalList;
