import styled from "styled-components";
import { darkGreen, lightRed } from "../UI/variables";
import { Link } from "react-router-dom";

const NavBar = styled.nav`
    align-items: center;
    display: inline-flex;
    height: 100vh;
    width: fit-content;

    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;

        a {
            text-decoration: none;
        }

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

        & > li:last-child {
            background-color: white;
            border: 1px solid ${lightRed};
            color: ${lightRed};

            &:hover {
                background-color: ${lightRed};
                color: white;
            }
        }
    }
`;

const Menu = () => {
    return (
        <NavBar>
            <ul>
                <Link to="/register/animal">
                    <li>Novo Animal</li>
                </Link>
                <li>Editar Dados</li>
                <Link to="/voting">
                    <li>Votação</li>
                </Link>
                <Link to="/list">
                    <li>Listagem</li>
                </Link>
                <Link to="/register/janitor">
                    <li>Novo Zelador</li>
                </Link>
                <li>Sair</li>
            </ul>
        </NavBar>
    );
};

export default Menu;
