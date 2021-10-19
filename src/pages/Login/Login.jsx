import styled from "styled-components";
import { BaseButton, BaseFormLegend, BaseInput } from "../../components/UI";
import { lightGreen } from "../../components/UI/variables";

const Page = styled.div`
    align-items: center;
    display: flex;
    height: 100vh;
    justify-content: center;
    width: 100vw;
`;

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

const Input = styled(BaseInput)`
    margin-bottom: 1em;
    width: 100%;
`;

const Login = () => {
    return (
        <Page>
            <Container>
                <Image></Image>
                <Form>
                    <BaseFormLegend>Login</BaseFormLegend>
                    <Input type="email" placeholder="Email" required />
                    <Input type="password" placeholder="Senha" required />
                    <BaseButton type="submit">Entrar</BaseButton>
                </Form>
            </Container>
        </Page>
    );
};

export default Login;
