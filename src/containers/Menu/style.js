import styled from "styled-components";
import BannerHambugruer from '../../assets/background-menu.svg'
import BackgroundMenu from '../../assets/background.svg'
import { Link } from "react-router-dom";


export const Container = styled.div`
    width: 100%;
    min-height: 100%;
    background-color: ${(props) => props.theme.bg};

    background: linear-gradient(rgba(251,248,244, 0.95),rgba(251,248,244, 0.95)), url('${BackgroundMenu}');

`

export const Banner = styled.div`
    background: linear-gradient(90deg, rgba(31,17,23,0.8) 0%, rgba(31,17,23,0.3) 65%), url('${BannerHambugruer}');
    background-color: ${(props) => props.theme.mainBlack};
    background-position: center;
    background-size: cover;

    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 420px;
    width: 100%;
    position: relative;

    h1{
        font-family: 'Road Rage', sans-serif;
        font-size: 72px;
        line-height: 60px;
        color: white;
        text-shadow: 0 8px 24px rgba(0,0,0,0.4);

        margin-right: 15%;

        span{
            display: block;
            color: ${(props) => props.theme.white};
            font-size:18px;
            font-family: "Poppins", sans-serif;
            font-weight: 500;
            margin-top: 12px;
        }
    }

    @media (max-width: 768px){
        height: 340px;
        justify-content: center;

        h1{
            font-size: 44px;
            line-height: 38px;
            margin-right: 0;
            text-align: center;
            padding: 0 24px;

            span{
                font-size: 15px;
            }
        }
    }
`

export const CategoriesMenu = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 16px;
    margin-top: -28px;
    position: relative;
    z-index: 2;
`

export const CategoryButton = styled(Link)`
    text-decoration: none;
    cursor: pointer;
    background: ${ props => props.$isActiveCategory ? props.theme.gradientBrand : props.theme.surface};
    box-shadow: ${(props) => props.theme.shadowMd};
    color: ${ props => props.$isActiveCategory ? '#fff' : props.theme.secondBlack};
    font-size: 15px;
    font-weight: 700;
    padding: 12px 24px;
    line-height: 20px;
    border: none;
    border-radius: ${(props) => props.theme.radiusPill};
    transition: ${(props) => props.theme.transition};

    &:hover{
        transform: translateY(-2px);
    }
`

export const ProductsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 40px;
    justify-content: center;
    max-width: 1280px;
    gap: 70px 40px;
    margin: 50px auto 0;

    @media (max-width: 960px){
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 640px){
        grid-template-columns: 1fr;
        padding: 24px;
        gap: 60px;
    }
`

export const BackButton = styled(Link)`
    background-color: rgba(255,255,255,0.12);
    backdrop-filter: blur(4px);
    border: 1px solid rgba(255,255,255,0.5);
    color: ${(props) => props.theme.white};
    padding: 10px 22px;
    font-weight: 600;
    font-size: 14px;
    border-radius: ${(props) => props.theme.radiusPill};
    transition: ${(props) => props.theme.transition};
    text-decoration: none;

    position: absolute;
    top: 20px;
    left: 20px;

    &:hover{
        background-color: ${(props) => props.theme.purple};
        border-color: ${(props) => props.theme.purple};
    }

    @media (max-width: 480px){
        padding: 8px 16px;
        font-size: 13px;
        top: 12px;
        left: 12px;
    }
`
