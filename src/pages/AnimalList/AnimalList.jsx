import styled from "styled-components";
import { baseCard, BaseFormLegend, NothingToShow } from "../../components/UI";
import { darkGreen, lightGreen, lightRed } from "../../components/UI/variables";
import { useState, useEffect } from "react";
import { instance } from "../../api/AxiosConfig";
import { toast } from "react-toastify";
import { useCookies } from "react-cookie";

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

const DisableButton = styled.button`
  background-color: white;
  border: 1px solid ${darkGreen};
  color: ${darkGreen};
  font-weight: bold;

  &:hover {
    border: 1px solid ${lightGreen};
    color: ${lightGreen};
  }
`;

const DisabledText = styled.p`
  background-color: ${lightRed};
  color: white;
  display: inline;
  font-weight: bold;
  text-transform: uppercase;
`;

const AnimalList = () => {
  const [animalList, setAnimalList] = useState([]);
  const [cookies, setCookies] = useCookies();

  useEffect(() => {
    instance
      .get("animal", {
        headers: {
          Authorization: `Bearer ${cookies.token}`,
        },
      })
      .then((response) => {
        console.log(response);
        setAnimalList(response.data);
      });
  }, []);

  const disableAnimal = (id) => {
    instance
      .patch(`animal/${id}`, [], {
        headers: {
          'Authorization': `Bearer ${cookies.token}`,
        },
      })
      .then((response) => {
        toast.success("Desabilitado com sucesso.");
        console.log(response);
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
      {animalList.length === 0 ? (
        <NothingToShow>Nenhum registro.</NothingToShow>
      ) : (
        <>
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
                <tr key={animal.id}>
                  <td>{animal.nickname}</td>
                  <td>{animal.likes}</td>
                  <td>{animal.dislikes}</td>
                  <td>
                    {animal.is_enabled === 1 ? (
                      <DisableButton
                        onClick={() => {
                          disableAnimal(animal.id);
                        }}
                      >
                        Desabilitar
                      </DisableButton>
                    ) : (
                      <DisabledText>Desabilitado</DisabledText>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </>
      )}
    </ContainerCard>
  );
};

export default AnimalList;
