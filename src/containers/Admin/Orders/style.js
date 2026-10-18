import styled from "styled-components";
import Select from 'react-select'

export const ProductImage = styled.img`
    height: 100px;
    width: 100px;
    padding: 12px;
    border-radius: 8px;
`

export const SelectStatus = styled(Select)`
    width: 240px;
`


export const Filter = styled.div`
    display: flex;
    justify-content: center;
    gap: 50px;
    background-color: ${(props) => props.theme.purple};
    padding: 16px;
    border-radius: 8px;
    margin-bottom: 20px;
`

export const FilterOptions = styled.button`
    cursor: pointer;
    background-color: transparent;
    border: none;
    color: ${(props) => props.theme.white};
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    padding: 8px;
    transition: 0.3s ease;

    border-bottom: ${(props) => props.$isActiveStatus ? `2px solid ${props.theme.white}` : 'none'};

    &:hover {
        background-color: ${(props) => props.theme.white};
        color: ${(props) => props.theme.purple};
        border-radius: 8px;
    }
`
