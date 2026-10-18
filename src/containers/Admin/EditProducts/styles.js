import styled from "styled-components";
import ReactSelect from "react-select";
import {Button} from "../../../components/Button";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    padding: 20px;
`

export const Form = styled.form`
    border-radius: ${(props) => props.theme.radiusLg};
    background: ${(props) => props.theme.gradientBrand};
    box-shadow: ${(props) => props.theme.shadowLg};
    padding: 40px;
    width: 100%;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media (max-width: 480px){
        padding: 28px 20px;
    }
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
    height: 44px;
    border-radius: ${(props) => props.theme.radiusMd};
    padding: 0 14px;
    border: none;
    font-size: 15px;
    transition: ${(props) => props.theme.transition};

    &:focus{
        box-shadow: 0 0 0 3px rgba(255,140,5,0.4);
    }
`

export const LabelUpload = styled.label`
    cursor: pointer;
    border: 2px dashed rgba(255,255,255,0.5);
    border-radius: ${(props) => props.theme.radiusMd};
    padding: 20px;
    display: flex;
    color: ${(props) => props.theme.white};
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    transition: ${(props) => props.theme.transition};

    &:hover{
        border-color: ${(props) => props.theme.orange};
    }

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

export const DeleteButton = styled.button`
    width: 100%;
    height: 52px;
    background: transparent;
    border: 2px solid ${(props) => props.theme.darkRed};
    color: ${(props) => props.theme.darkRed};
    font-weight: 700;
    font-size: 15px;
    border-radius: ${(props) => props.theme.radiusPill};
    transition: ${(props) => props.theme.transition};

    &:hover{
        background-color: ${(props) => props.theme.darkRed};
        color: #fff;
    }

    &:disabled{
        opacity: 0.6;
        cursor: not-allowed;
    }
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