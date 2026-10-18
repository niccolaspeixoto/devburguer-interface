import styled from "styled-components";
import ReactSelect from "react-select";
import {Button} from "../../../components/Button";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
`

export const Form = styled.form`
    border-radius: 20px;
    background-color: ${(props) => props.theme.black};
    padding: 40px;
    width: 100%;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export const InputGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`

export const Label = styled.label`
    color: ${(props) => props.theme.white};
    font-size: 14px;
    font-weight: 500;
`

export const Input = styled.input`
    width: 100%;
    height: 40px;
    border-radius: 10px;
    padding: 0 10px;
    border: none;
`

export const LabelUpload = styled.label`
    cursor: pointer;
    border: 2px dashed ${(props) => props.theme.white};
    border-radius: 10px;
    padding: 20px;
    display: flex;
    color: ${(props) => props.theme.white};
    align-items: center;
    justify-content: center;
    margin-top: 20px;

    > svg{
        width: 40px;
        height: 40px;
        fill: ${(props) => props.theme.white};
        margin-right: 10px;
    }

    input{ 
        display: none;
    }
`

export const Select = styled(ReactSelect)``

export const SubmitButton = styled(Button)`
    margin-top: 40px;
`

export const ErrorMessage = styled.span`
    color: ${(props) => props.theme.darkRed};
    font-size: 14px;
    font-weight: 500;
`

export const CheckBoxContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    cursor: pointer;
`