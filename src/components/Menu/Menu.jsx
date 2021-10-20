import styled from "styled-components";
import { darkGreen } from "../UI/variables";

const NavBar = styled.nav`
    align-items: center;
    display: flex;
    height: 100vh;
    width: fit-content;

    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;

        li {
            background-color: ${darkGreen};
            border: 1px solid ${darkGreen};
            color: white;
            padding: 1em 0.5em;
            text-align: center;
            transition: 0.1s;

            &:hover {
                background-color: white;
                color: ${darkGreen};
            }
        }
    }
`;

const Menu = () => {
    return (
        <NavBar>
            <ul>
                <li>Novo Animal</li>
                <li>Editar Dados</li>
                <li>Votação</li>
                <li>Listagem</li>
                <li>Novo Zelador</li>
            </ul>
        </NavBar>
    );
};

export default Menu;
