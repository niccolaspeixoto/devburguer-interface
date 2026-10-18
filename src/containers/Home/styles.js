import styled from 'styled-components'
import bannerHome from '../../assets/banner-home.svg'
import background from '../../assets/background.svg'

export const Banner = styled.div`
    background: url('${bannerHome}');
    background-position: center;
    background-size: cover;
    height: 50vh;

    h1{
        font-family: "Road Rage", sans-serif;
        font-size: 80px;
        color: white;
        position: absolute;
        right: 20%;
        top: 10%;
    }
`

export const Container = styled.section`
    background: linear-gradient(rgba(255,255,255, 0.5),rgba(255,255,255, 0.5)), url('${background}');
    height: auto;
    background-size: cover;
`

export const Content = styled.div`
    padding-bottom: 50px;
`

