import styled from "styled-components";
import texture from '../../assets/fundo-carrinho.svg'
import background from '../../assets/background.svg'

export const Container = styled.div`
    width: 100%;
    background: 
    linear-gradient(rgba(255,255,255, 0.5),rgba(255,255,255, 0.5)), url('${background}');
        height: auto;
        background-size: cover;
    min-height: 100%;
`

export const Banner = styled.div`
    background: url(${texture});
    background-size: cover;
    background-position: center;
    background-color: #F5F5F5;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    height: 200px;
    width: 100%;

    img{
        height: 150px;
    }
`

export const Title = styled.h1`
    font-size: 2rem;
    font-weight: 700;
    padding-bottom: 12px;
    color: ${(props) => props.theme.gren};
    text-align: center;
    position: relative;

    &::after{
        position: absolute;
        left: calc(50% + -50px);
        content: '';
        width: 100px;
        height: 4px;
        background-color: ${(props) => props.theme.gren};
        bottom: 0;
    }
`

export const Content = styled.div`
    display: grid;
    grid-template-columns: 1fr 30%;
    gap: 20px;
    width: 100%;
    height: 100%;
    max-width: 1280px;
    padding: 40px;
    margin: 0 auto;
`