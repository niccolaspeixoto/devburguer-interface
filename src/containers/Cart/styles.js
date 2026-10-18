import styled from "styled-components";
import background from '../../assets/background.svg'

export const Container = styled.div`
    width: 100%;
    background:
    linear-gradient(rgba(251,248,244, 0.95),rgba(251,248,244, 0.95)), url('${background}');
        height: auto;
        background-size: cover;
    min-height: 100%;
`

export const Banner = styled.div`
    background: ${(props) => props.theme.gradientBrand};
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    height: 180px;
    width: 100%;

    img{
        height: 120px;
        filter: drop-shadow(0 10px 20px rgba(0,0,0,0.25));
    }
`

export const Title = styled.h1`
    font-size: 2rem;
    font-weight: 800;
    padding: 32px 0 12px;
    color: ${(props) => props.theme.mainBlack};
    text-align: center;
    position: relative;

    &::after{
        position: absolute;
        left: calc(50% + -28px);
        content: '';
        width: 56px;
        height: 4px;
        border-radius: ${(props) => props.theme.radiusPill};
        background: ${(props) => props.theme.gradientCta};
        bottom: 0;
    }
`

export const Content = styled.div`
    display: grid;
    grid-template-columns: 1fr 340px;
    gap: 24px;
    width: 100%;
    height: 100%;
    max-width: 1280px;
    padding: 40px;
    margin: 0 auto;

    @media (max-width: 900px){
        grid-template-columns: 1fr;
    }
`