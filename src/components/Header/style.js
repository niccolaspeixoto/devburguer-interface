import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
    background-color: ${(props) => props.theme.mainBlack};
    width: 100%;
    height: 80px;
    padding: 0 20px;
    display: flex;
`

export const Content = styled.div`
    max-width: 1280px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
`

export const Navigation = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
    height: auto;

    div{
        margin-left: 56px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 20px;

        hr{
            width: 1px;
            height: 24px;
        }
    }
`

export const HeaderLink = styled(Link)`
    color: ${props => props.$isActive ? (props) => props.theme.purple : (props) => props.theme.white};
    border-bottom: ${props => props.$isActive ? `2px solid ${(props)=> props.theme.purple}` : 'none'};
    text-decoration: none;
    font-size: 16px;
    font-weight: 500;
    transition: color 0.3s;

    &:hover{
        color: ${(props) => props.theme.purple}
    }
`

export const Options = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
`

export const Profile = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    gap: 16px;

    p{
        color: ${(props) => props.theme.white};
        line-height: 90%;
        font-weight: 300;

        span{
        font-weight: 800;
        color: ${(props) => props.theme.purple};
        }
    }
`

export const LinkContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const LogOut = styled.button`
    color: red;
    text-decoration: none;
    font-size: 16px;
    font-weight: 600;
    background-color: transparent;
    border: none;
`