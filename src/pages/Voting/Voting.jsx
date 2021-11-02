import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { toast } from "react-toastify";
import styled from "styled-components";
import { instance } from "../../api/AxiosConfig";
import { baseCard, BaseFormLegend, NothingToShow } from "../../components/UI";
import { lightRed, darkGreen } from "../../components/UI/variables";

const Container = styled.div`
  ${baseCard};
`;

const VotingCard = styled.div`
  height: 100%;
  width: 100%;
`;

const AnimalImage = styled.img`
  height: 250px;
  width: 100%;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 2em 0;
`;

const VotingButton = styled.button`
  align-items: center;
  background-color: ${(props) => (props.like ? darkGreen : lightRed)};
  border: 1px solid;
  border-color: ${(props) => (props.like ? darkGreen : lightRed)};
  border-radius: 8px;
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  height: 56px;
  justify-content: space-around;
  transition: 0.1s;
  width: 150px;

  &:hover {
    background-color: white;
  }

  &:active {
    box-shadow: 0 10px 20px ${(props) => (props.like ? darkGreen : lightRed)},
      0 6px 6px ${(props) => (props.like ? darkGreen : lightRed)};
  }

  span {
    font-size: 1.5em;
    font-weight: bold;
  }
`;

const Info = styled.p`
  font-size: 1.5em;
  font-weight: bold;
  text-align: center;
`;

const Voting = () => {
  const [list, setList] = useState([]);
  const [count, setCount] = useState(0);
  const [cookies, setCookies] = useCookies();

  useEffect(() => {
    console.log(
      cookies.userType,
      cookies.token,
      cookies.id
    );
    instance
      .get(`animal/to-vote`, {
        headers: {
          Authorization: `Bearer ${cookies.token}`,
        },
      })
      .then((response) => {
        setList(response.data);
      })
  }, []);

  const like = (like, id) => {
    instance
      .patch(
        `animal/voting/${id}`,
        {
          like: like,
        },
        {
          headers: {
            Authorization: `Bearer ${cookies.token}`,
          },
        }
      )
      .then(() => {
        toast.success("Voto salvo!");
      })
      .catch(() => {
        toast.error("Erro ao enviar voto.");
      });
  };

  const dislike = (like, id) => {
    instance
      .patch(
        `animal/voting/${id}`,
        {
          like: like,
        },
        {
          headers: {
            Authorization: `Bearer ${cookies.token}`,
          },
        }
      )
      .then(() => {
        toast.success("Voto salvo!");
      })
      .catch(() => {
        toast.error("Erro ao enviar voto.");
      });
  };

  return (
    <Container>
      {list.length !== 0 ? (
        <>
          <BaseFormLegend as="span">Votação</BaseFormLegend>
          <VotingCard>
            <AnimalImage src={list[count].image_url} alt="" />
            <Info>Apelido: {list[count].nickname}</Info>
            <Info>Nome Científico: {list[count].scientific_name}</Info>
            <Info>Ala: {list[count].zoo_wing}</Info>
            <ButtonContainer>
              <VotingButton
                onClick={() => {
                  like("like", list[count].id);
                }}
              >
                <i className="far fa-thumbs-up fa-2x"></i>
                <span>Like</span>
              </VotingButton>
              <VotingButton
                onClick={() => {
                  dislike("dislike", list[count].id);
                }}
              >
                <i className="far fa-thumbs-down fa-2x"></i>
                <span>Dislike</span>
              </VotingButton>
            </ButtonContainer>
          </VotingCard>
        </>
      ) : (
        <NothingToShow>Nenhum registro.</NothingToShow>
      )}
    </Container>
  );
};

export default Voting;
