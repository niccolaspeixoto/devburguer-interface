import styled from "styled-components";
import Select from 'react-select'

export const ProductImage = styled.img`
    height: 80px;
    width: 80px;
    padding: 0;
    object-fit: cover;
    border-radius: ${(props) => props.theme.radiusMd};
`

export const SelectStatus = styled(Select)`
    width: 240px;
`


export const Filter = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 12px;
    background: ${(props) => props.theme.gradientBrand};
    padding: 16px;
    border-radius: ${(props) => props.theme.radiusLg};
    box-shadow: ${(props) => props.theme.shadowSm};
    margin-bottom: 24px;
`

export const FilterOptions = styled.button`
    cursor: pointer;
    background-color: ${(props) => props.$isActiveStatus ? props.theme.white : 'transparent'};
    border: none;
    color: ${(props) => props.$isActiveStatus ? props.theme.purple : props.theme.white};
    font-size: 15px;
    font-weight: 600;
    line-height: 24px;
    padding: 8px 18px;
    border-radius: ${(props) => props.theme.radiusPill};
    transition: ${(props) => props.theme.transition};

    &:hover {
        background-color: ${(props) => props.theme.white};
        color: ${(props) => props.theme.purple};
    }
`
