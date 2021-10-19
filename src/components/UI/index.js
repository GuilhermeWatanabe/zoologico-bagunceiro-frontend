import styled from "styled-components";
import { baseRadius, darkGreen } from "./variables";

export const BaseInput = styled.input`
    border: none;
    border-bottom: 1px solid ${darkGreen};
    box-sizing: border-box;
    height: 56px;
    padding: 0;

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
