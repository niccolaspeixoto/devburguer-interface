import styled from 'styled-components'

export const ContainerButton = styled.button`
    width: 100%;
    height: 56px;
    border: none;
    border-radius: ${(props) => props.theme.radiusPill};
    background: ${(props) => props.theme.gradientCta};
    font-family: "Poppins", sans-serif;
    font-size: 17px;
    font-weight: 700;
    letter-spacing: 0.3px;
    color: ${props => props.red ? '#fff' : '#fff'};
    box-shadow: ${(props) => props.theme.shadowSm};
    transition: ${(props) => props.theme.transition};

    &:hover{
        transform: translateY(-2px);
        box-shadow: ${(props) => props.theme.shadowMd};
    }

    &:active{
        transform: translateY(0);
    }

    &:disabled{
        opacity: 0.6;
        cursor: not-allowed;
        transform: none;
    }
`