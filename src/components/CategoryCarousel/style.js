import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`
    .carousel-item{
        padding-right: 40px;
    }

    padding-left: 40px;
`

export const Title = styled.h2`
    font-size: 32px;
    font-weight: 800;
    color: ${(props) => props.theme.purple};
    padding-bottom: 12px;
    margin-bottom: 40px;
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
        background-color: ${(props) => props.theme.purple};
        
    }
`

export const ContainerItens = styled.div`
    background: url('${(props) => props.imageUrl}')no-repeat;
    background-position: center;
    background-size: cover;
    border-radius: 20px;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px 10px;
    width: 100%;
    height: 200px;

   
`

export const CategoryButton = styled(Link)`

        color: ${(props) => props.theme.white};
        background-color: rgba(0,0,0, 0.5);
        padding: 10px 30px;
        border-radius: 30px;
        font-size: 22.5px;
        font-weight: bold;
        text-decoration: none;
        transition: 0.3s ease;

        &:hover{
            background-color: rgb(112, 60, 103);
        }
`