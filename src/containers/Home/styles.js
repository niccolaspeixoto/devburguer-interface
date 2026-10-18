import styled from 'styled-components'
import bannerHome from '../../assets/banner-home.svg'
import background from '../../assets/background.svg'

export const Banner = styled.div`
    background: linear-gradient(90deg, rgba(31,17,23,0.75) 0%, rgba(31,17,23,0.25) 60%), url('${bannerHome}');
    background-position: center;
    background-size: cover;
    height: 60vh;
    min-height: 420px;
    display: flex;
    align-items: center;
    position: relative;

    h1{
        font-family: "Road Rage", sans-serif;
        font-size: 80px;
        line-height: 0.9;
        color: white;
        padding-left: 10%;
        max-width: 600px;
        text-shadow: 0 8px 24px rgba(0,0,0,0.4);
    }

    @media (max-width: 768px){
        min-height: 320px;

        h1{
            font-size: 52px;
            padding-left: 6%;
        }
    }

    @media (max-width: 480px){
        min-height: 260px;

        h1{
            font-size: 38px;
            padding-left: 24px;
            padding-right: 24px;
            max-width: 100%;
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

