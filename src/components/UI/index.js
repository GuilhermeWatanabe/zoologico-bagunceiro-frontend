import styled, { css } from "styled-components";
import { baseRadius, darkGreen } from "./variables";

export const baseCard = css`
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    padding: 2em;
    width: 30%;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
`;

export const BaseInput = styled.input`
    border: none;
    border-bottom: 1px solid ${darkGreen};
    box-sizing: border-box;
    height: 56px;
    margin-bottom: 1em;
    padding: 0;
    width: ${(props) => props.sizeW};

    &:focus {
        outline: none;
    }
`;

export const BaseButton = styled.button`
    background-color: ${darkGreen};
    border: none;
    border-radius: ${baseRadius};
    box-sizing: border-box;
    color: white;
    font-weight: bold;
    height: 56px;
    margin-top: 1em;
    transition: 0.1s;

    &:hover {
        background-color: white;
        border: 1px solid ${darkGreen};
        color: ${darkGreen};
    }
`;

export const BaseFormLegend = styled.legend`
    font-size: 2em;
    line-height: 2em;
    text-align: center;
`;

export const BaseContainer = styled.div`
    align-items: center;
    box-sizing: border-box;
    display: flex;
    float: right;
    justify-content: center;
    height: 100%;
    width: 100%;
`;

export const NothingToShow = styled.div`
    content: 'Sem registro.';
    font-size: 3em;
    font-weight: bold;
    padding: 3em 0;
    text-align: center;
`;