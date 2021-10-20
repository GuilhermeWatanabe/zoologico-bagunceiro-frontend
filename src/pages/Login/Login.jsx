import styled from "styled-components";
import { BaseButton, BaseFormLegend, BaseInput } from "../../components/UI";
import { lightGreen } from "../../components/UI/variables";

const Container = styled.div`
    box-sizing: border-box;
    display: flex;
    height: 500px;
    width: 900px;
`;

const Image = styled.div`
    background-color: ${lightGreen};
    height: 100%;
    width: 50%;
`;

const Form = styled.form`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2em;
    width: 50%;
`;

const Login = () => {
    return (
        <Container>
            <Image></Image>
            <Form>
                <BaseFormLegend>Login</BaseFormLegend>
                <BaseInput sizeW={`100%`} type="email" placeholder="Email" required />
                <BaseInput sizeW={`100%`} type="password" placeholder="Senha" required />
                <BaseButton type="submit">Entrar</BaseButton>
            </Form>
        </Container>
    );
};

export default Login;