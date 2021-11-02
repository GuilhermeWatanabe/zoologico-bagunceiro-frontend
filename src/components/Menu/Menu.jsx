import styled from "styled-components";
import { Redirect } from "react-router";
import { darkGreen, lightRed } from "../UI/variables";
import { Link } from "react-router-dom";
import { instance } from "../../api/AxiosConfig";
import { useState } from "react";
import { toast } from "react-toastify";
import { useCookies } from "react-cookie";

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

    a:last-child {
      li {
        background-color: white;
        border: 1px solid ${lightRed};
        color: ${lightRed};

        &:hover {
          background-color: ${lightRed};
          color: white;
        }
      }
    }
  }
`;

const Menu = () => {
  const [redirect, setRedirect] = useState(false);
  const [cookies, setCookies] = useCookies();

  const logout = () => {
    instance
      .post("logout", {
        headers: {
          Authorization: `Bearer ${cookies.token}`,
        },
      })
      .then(() => {
        setRedirect(true);
      })
      .catch(() => {
        toast.error("Não foi possivel fazer logout.");
      });
  };

  if (redirect === true) {
    return <Redirect to="/" />;
  }

  return (
    <NavBar>
      <ul>
        {cookies.userType === "janitor" ? (
          <>
            <Link to="/register/animal">
              <li>Novo Animal</li>
            </Link>
            <Link to="/register/janitor">
              <li>Novo Zelador</li>
            </Link>
            <Link to="/list">
              <li>Listagem</li>
            </Link>
          </>
        ) : (
          <>
            <Link to="/edit/animal">
              <li>Editar Dados</li>
            </Link>
            <Link to="/voting">
              <li>Votação</li>
            </Link>
          </>
        )}
        <li
          onClick={() => {
            logout();
          }}
        >
          Sair
        </li>
      </ul>
    </NavBar>
  );
};

export default Menu;
