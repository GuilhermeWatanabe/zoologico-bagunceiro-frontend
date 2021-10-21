import styled from "styled-components";
import { baseCard, BaseFormLegend, BaseInput, BaseButton } from "../UI";

const Form = styled.form`
    ${baseCard};
`;

const NewJanitor = () => {
    return (
        <Form>
            <BaseFormLegend>Novo Zelador</BaseFormLegend>
            <BaseInput type="text" placeholder="Nome" />
            <BaseInput type="email" placeholder="E-mail" />
            <BaseInput type="password" placeholder="Senha" />
            <BaseInput type="password" placeholder="Confirmar senha" />
            <BaseButton>Cadastrar</BaseButton>
        </Form>
    );
};

export default NewJanitor;
