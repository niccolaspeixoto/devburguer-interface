import styled from "styled-components";
import BannerHambugruer from '../../assets/background-menu.svg'
import BackgroundMenu from '../../assets/background.svg'
import { Link } from "react-router-dom";


export const Container = styled.div`
    width: 100%;
    min-height: 100%;
    background-color: ${(props) => props.theme.secondWhite};

        background: linear-gradient(rgba(255,255,255, 0.5),rgba(255,255,255, 0.5)), url('${BackgroundMenu}');
    
`

export const Banner = styled.div`
    background: url('${BannerHambugruer}');
    background-color: ${(props) => props.theme.mainBlack};
    background-position: center;
    background-size: cover;

    display: flex;
    justify-content: center;
    align-items: center;
    height: 480px;
    width: 100%;
    position: relative;

    h1{
        font-family: 'Road Rage', sans-serif;
        font-size: 80px;
        line-height: 65px;
        color: white;
        position: absolute;

        right: 20%;

        span{
            display: block;
            color: ${(props) => props.theme.white};
            font-size:20px;
        }
    }
`

export const CategoriesMenu = styled.div`
    display: flex;
    justify-content: center;
    gap: 50px;
    margin-top: 50px;
`

export const CategoryButton = styled(Link)`
    text-decoration: none;
    cursor: pointer;
    background: none;
    color: ${ props => props.$isActiveCategory ? (props) => props.theme.purple : '#6c4275'};
    font-size: 24px;
    font-weight: bold;
    padding-bottom: 5px;
    line-height: 20px;
    border: none;
    border-bottom: ${props => props.$isActiveCategory && `3px solid ${(props) => props.theme.purple}`}; 
`

export const ProductsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 40px;
    justify-content: center;
    max-width: 1280px;
    gap: 60px;
    margin: 50px auto 0;
`

export const BackButton = styled(Link)`
    background-color: ${(props) => props.theme.purple};
    color: ${(props) => props.theme.white};
    padding: 10px 20px;
    border: none;
    border-radius: 14px;
    transition: 0.3s ease;
    text-decoration: none;

    position: absolute;
    top: 10%;
    left: 10%;

    &:hover{
        background-color: #5d266b;
    }
`
