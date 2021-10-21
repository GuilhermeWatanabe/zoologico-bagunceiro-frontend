import styled from "styled-components";
import { baseCard, BaseFormLegend } from "../../components/UI";
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
        box-shadow: 0 10px 20px
                ${(props) => (props.like ? darkGreen : lightRed)},
            0 6px 6px ${(props) => (props.like ? darkGreen : lightRed)};
    }

    span {
        font-size: 1.5em;
        font-weight: bold;
    }
`;

const Voting = () => {
    return (
        <Container>
            <BaseFormLegend as="span">Votação</BaseFormLegend>
            <VotingCard>
                <AnimalImage
                    src={`https://images.pexels.com/photos/1996333/pexels-photo-1996333.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`}
                    alt="anything"
                />
                <ButtonContainer>
                    <VotingButton like>
                        <i class="far fa-thumbs-up fa-2x"></i>
                        <span>Like</span>
                    </VotingButton>
                    <VotingButton>
                        <i class="far fa-thumbs-down fa-2x"></i>
                        <span>Dislike</span>
                    </VotingButton>
                </ButtonContainer>
            </VotingCard>
        </Container>
    );
};

export default Voting;