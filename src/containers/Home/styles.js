import styled, { keyframes } from 'styled-components'
import { Link } from 'react-router-dom'
import background from '../../assets/background.svg'

export const Hero = styled.section`
    background-color: ${(props) => props.theme.bg};
    overflow: hidden;
`

export const HeroInner = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 40px;
    max-width: 1280px;
    margin: 0 auto;
    padding: 64px 10% 56px;

    @media (max-width: 900px){
        flex-direction: column-reverse;
        text-align: center;
        padding: 40px 24px 32px;
        gap: 32px;
    }
`

export const HeroText = styled.div`
    max-width: 520px;

    @media (max-width: 900px){
        max-width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`

export const Title = styled.h1`
    font-family: "Road Rage", sans-serif;
    font-size: 72px;
    line-height: 0.95;
    color: ${(props) => props.theme.mainBlack};
    margin-bottom: 18px;

    span{
        color: ${(props) => props.theme.orange};
    }

    @media (max-width: 480px){
        font-size: 50px;
    }
`

export const Subtitle = styled.p`
    color: ${(props) => props.theme.darkGray};
    font-size: 18px;
    line-height: 1.6;
    max-width: 420px;
    margin-bottom: 32px;

    @media (max-width: 900px){
        max-width: 480px;
    }
`

export const CtaButton = styled(Link)`
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background-color: ${(props) => props.theme.orange};
    color: #fff;
    font-weight: 700;
    font-size: 16px;
    padding: 16px 32px;
    border-radius: ${(props) => props.theme.radiusPill};
    text-decoration: none;
    transition: ${(props) => props.theme.transition};
    cursor: pointer;

    &:hover{
        background-color: ${(props) => props.theme.darkOrange};
        transform: translateY(-3px);
    }
`

export const HeroVisual = styled.div`
    position: relative;
    flex-shrink: 0;
    width: 320px;
    height: 320px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 900px){
        width: 240px;
        height: 240px;
    }
`

export const Blob = styled.div`
    position: absolute;
    inset: 0;
    background-color: ${(props) => props.theme.purple};
    clip-path: polygon(42% 0%, 68% 7%, 88% 23%, 99% 48%, 92% 72%, 73% 92%, 48% 100%, 23% 93%, 5% 76%, 0% 50%, 6% 25%, 23% 7%);
`

export const HeroImage = styled.img`
    position: relative;
    width: 78%;
`

export const Sticker = styled.span`
    position: absolute;
    top: -14px;
    right: -18px;
    transform: rotate(12deg);
    background-color: ${(props) => props.theme.mainBlack};
    color: #fff;
    font-size: 13px;
    font-weight: 700;
    text-align: center;
    line-height: 1.2;
    padding: 12px 16px;
    border-radius: 50%;
    box-shadow: ${(props) => props.theme.shadowMd};
    width: 72px;
    height: 72px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 900px){
        width: 60px;
        height: 60px;
        font-size: 11px;
        right: 0;
    }
`

const scroll = keyframes`
    from { transform: translateX(0); }
    to { transform: translateX(-50%); }
`

export const Marquee = styled.div`
    width: 100%;
    overflow: hidden;
    background-color: ${(props) => props.theme.mainBlack};
    padding: 14px 0;
`

export const MarqueeTrack = styled.div`
    display: flex;
    width: max-content;
    animation: ${scroll} 22s linear infinite;

    span{
        display: inline-flex;
        align-items: center;
        white-space: nowrap;
        color: ${(props) => props.theme.white};
        font-size: 14px;
        font-weight: 700;
        letter-spacing: 0.4px;
        text-transform: uppercase;
        padding: 0 24px;

        &::after{
            content: '•';
            margin-left: 24px;
            color: ${(props) => props.theme.orange};
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
