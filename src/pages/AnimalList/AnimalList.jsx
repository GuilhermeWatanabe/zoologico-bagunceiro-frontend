import styled from "styled-components";
import { baseCard, BaseFormLegend } from "../../components/UI";
import { darkGreen } from "../../components/UI/variables";

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
    }
`;

const AnimalList = () => {
    return (
        <ContainerCard>
            <BaseFormLegend as="span">Lista de Animais</BaseFormLegend>
            <Table>
                <thead>
                    <tr>
                        <th>qualquer coisa</th>
                        <th>outra coisa</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>qualquer coisa 1</td>
                        <td>outra coisa 1</td>
                    </tr>
                    <tr>
                        <td>qualquer coisa 1</td>
                        <td>outra coisa 1</td>
                    </tr>
                    <tr>
                        <td>qualquer coisa 1</td>
                        <td>outra coisa 1</td>
                    </tr>
                </tbody>
            </Table>
        </ContainerCard>
    );
};

export default AnimalList;
