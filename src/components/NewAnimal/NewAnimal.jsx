import styled from "styled-components";
import { BaseFormLegend, BaseInput, BaseButton, baseCard } from "../UI";

const Form = styled.form`
    ${baseCard};
`;

const NewAnimal = () => {
    return (
        <Form>
            <BaseFormLegend>Novo Animal</BaseFormLegend>
            <BaseInput sizeW={`100%`} type="text" placeholder="Apelido" />
            <BaseInput
                sizeW={`100%`}
                type="text"
                placeholder="Nome científico"
            />
            <BaseInput
                sizeW={`100%`}
                type="text"
                placeholder="Ala do Zoológico"
            />
            <BaseInput
                sizeW={`100%`}
                type="password"
                placeholder="Confirmar senha"
            />
            <input type="file" />
            <BaseButton type="submit">
                Cadastrar
            </BaseButton>
        </Form>
    );
};

export default NewAnimal;
