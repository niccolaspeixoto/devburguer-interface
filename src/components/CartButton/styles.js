import styled from "styled-components";

export const ContainerButton = styled.button `
    background: ${(props) => props.theme.gradientBrand};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    width: 100%;
    height: 48px;
    border: 0;
    border-radius: ${(props) => props.theme.radiusPill};
    font-size: 14px;
    font-weight: 600;
    color: ${(props) => props.theme.white};
    box-shadow: ${(props) => props.theme.shadowSm};
    transition: ${(props) => props.theme.transition};

    img{
        height: 18px;
    }

    &:hover{
        transform: translateY(-2px);
        box-shadow: ${(props) => props.theme.shadowMd};
    }

    &:active{
        transform: scale(0.94);
        box-shadow: ${(props) => props.theme.shadowSm};
    }
`