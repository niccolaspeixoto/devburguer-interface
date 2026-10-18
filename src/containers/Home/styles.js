import styled from 'styled-components'
import { Link } from 'react-router-dom'
import background from '../../assets/background.svg'

export const Hero = styled.section`
    background: linear-gradient(135deg, ${(props) => props.theme.mainBlack} 0%, ${(props) => props.theme.darkPurple} 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
    padding: 72px 10% 56px;
    overflow: hidden;
    position: relative;

    @media (max-width: 900px){
        flex-direction: column;
        text-align: center;
        padding: 48px 24px 40px;
        gap: 24px;
    }
`

export const HeroContent = styled.div`
    max-width: 560px;

    @media (max-width: 900px){
        max-width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`

export const Eyebrow = styled.span`
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: ${(props) => props.theme.orange};
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 1.2px;
    text-transform: uppercase;
    margin-bottom: 16px;
`

export const Title = styled.h1`
    font-family: "Road Rage", sans-serif;
    font-size: 68px;
    line-height: 0.95;
    color: white;
    margin-bottom: 20px;

    span{
        color: ${(props) => props.theme.orange};
    }

    @media (max-width: 480px){
        font-size: 48px;
    }
`

export const Subtitle = styled.p`
    color: ${(props) => props.theme.lightGray};
    font-size: 17px;
    line-height: 1.6;
    max-width: 440px;
    margin-bottom: 32px;

    @media (max-width: 900px){
        max-width: 480px;
    }
`

export const CtaButton = styled(Link)`
    display: inline-flex;
    align-items: center;
    gap: 10px;
    background: ${(props) => props.theme.gradientCta};
    color: #fff;
    font-weight: 700;
    font-size: 16px;
    padding: 16px 32px;
    border-radius: ${(props) => props.theme.radiusPill};
    text-decoration: none;
    box-shadow: ${(props) => props.theme.shadowMd};
    transition: ${(props) => props.theme.transition};
    cursor: pointer;

    &:hover{
        transform: translateY(-3px);
        box-shadow: ${(props) => props.theme.shadowLg};
    }
`

export const Badges = styled.ul`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 12px 28px;
    list-style: none;
    margin-top: 36px;
    padding: 0;

    li{
        display: flex;
        align-items: center;
        gap: 8px;
        color: ${(props) => props.theme.white};
        font-size: 14px;
        font-weight: 600;
    }

    @media (max-width: 900px){
        justify-content: center;
    }
`

export const HeroImageWrap = styled.div`
    position: relative;
    flex-shrink: 0;
    width: 380px;
    display: flex;
    align-items: center;
    justify-content: center;

    &::before{
        content: '';
        position: absolute;
        inset: 0;
        margin: auto;
        width: 340px;
        height: 340px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(255,140,5,0.35) 0%, rgba(255,140,5,0) 70%);
        filter: blur(10px);
    }

    img{
        position: relative;
        width: 100%;
        max-width: 360px;
        filter: drop-shadow(0 20px 30px rgba(0,0,0,0.45));
        animation: heroFloat 4s ease-in-out infinite;
    }

    @keyframes heroFloat {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-14px); }
    }

    @media (max-width: 900px){
        width: 260px;

        img{
            max-width: 240px;
        }

        &::before{
            width: 220px;
            height: 220px;
        }
    }
`

export const Container = styled.section`
    background: linear-gradient(rgba(251,248,244, 0.92),rgba(251,248,244, 0.92)), url('${background}');
    height: auto;
    background-size: cover;
`

export const Content = styled.div`
    padding-bottom: 50px;
`
