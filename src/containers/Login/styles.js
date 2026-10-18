import styled from 'styled-components'
import BackgroundLogin from '../../assets/background-login.svg'
import Background from '../../assets/background.svg'
import { Link as ReactLink} from 'react-router-dom'

export const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
min-height: 100vh;
width: 100%;

@media (max-width: 860px){
    flex-direction: column;
}
`

export const LeftContainer = styled.div`
background: url(${BackgroundLogin}) no-repeat center;
background-size: cover;
width: 50%;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
flex-shrink: 0;

    img{
        width: 50%;
    }

    @media (max-width: 860px){
        width: 100%;
        height: 160px;

        img{
            width: 30%;
            min-width: 120px;
        }
    }
`

export const RightContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 50%;
    flex-shrink: 0;

    background: url(${Background}) no-repeat center;
    background-size: cover;
    background-color: #1e1e1e;

    p{
        color: ${(props) => props.theme.white};
        font-size: 16px;
        font-weight: bold;
        a{
            color: ${(props) => props.theme.purple};
            text-decoration: underline;
        }
    }

    @media (max-width: 860px){
        width: 100%;
        height: auto;
        padding: 40px 0;
    }
`

export const Tittle = styled.h2`
    font-family: "Road Rage", sans-serif;
    font-size: 40px;
    color: ${(props) => props.theme.white};
    text-align: center;
    padding: 0 24px;

    span{
        color: ${(props) => props.theme.purple};
        font-family: "Road Rage", sans-serif;
    }

    @media (max-width: 480px){
        font-size: 30px;
    }
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    padding: 20px;
    width: 100%;
    max-width: 400px;
`

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 100%;

    input{
        height: 40px;
        width: 100%;
        padding: 10px;
        border-radius: 5px;
        border: none;
    }

    label{
        font-size: 18px;
        font-weight: bold;
        color: ${(props) => props.theme.white};
    }

    p{
        font-size: 14px;
        line-height: 80%;
        color: ${(props) => props.theme.darkRed};
        font-weight: 600;
        height: 10px;
    }

`

export const Link = styled(ReactLink)`
    text-decoration: none;
    color: white;
`