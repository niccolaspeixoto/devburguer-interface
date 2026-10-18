import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`
    .carousel-item{
        padding-right: 20px;
    }

    padding-left: 20px;
    padding-right: 20px;

    @media (min-width: 640px){
        .carousel-item{
            padding-right: 40px;
        }

        padding-left: 40px;
        padding-right: 0;
    }
`

export const Title = styled.h2`
    font-size: 30px;
    font-weight: 800;
    color: ${(props) => props.theme.mainBlack};
    padding-bottom: 12px;
    margin-bottom: 32px;
    padding-top: 20px;
    position: relative;
    text-align: center;

    &::after{
        content: '';
        position: absolute;
        bottom: 0;
        left: calc(50% - 28px);
        width: 56px;
        height: 4px;
        border-radius: ${(props) => props.theme.radiusPill};
        background: ${(props) => props.theme.gradientBrand};

    }
`

export const ContainerItens = styled.div`
    background: linear-gradient(rgba(0,0,0,0.05), rgba(0,0,0,0.35)), url('${(props) => props.imageUrl}')no-repeat;
    background-position: center;
    background-size: cover;
    border-radius: ${(props) => props.theme.radiusLg};
    cursor: pointer;
    box-shadow: ${(props) => props.theme.shadowSm};
    transition: ${(props) => props.theme.transition};

    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px 10px;
    width: 100%;
    height: 200px;

    &:hover{
        transform: translateY(-4px);
        box-shadow: ${(props) => props.theme.shadowMd};
    }
`

export const CategoryButton = styled(Link)`

        color: ${(props) => props.theme.white};
        background-color: rgba(255,255,255, 0.15);
        backdrop-filter: blur(4px);
        border: 1px solid rgba(255,255,255,0.4);
        padding: 10px 28px;
        border-radius: ${(props) => props.theme.radiusPill};
        font-size: 20px;
        font-weight: 700;
        text-decoration: none;
        transition: ${(props) => props.theme.transition};

        &:hover{
            background-color: ${(props) => props.theme.purple};
            border-color: ${(props) => props.theme.purple};
        }
`