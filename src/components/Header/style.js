import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
    background-color: ${(props) => props.theme.mainBlack};
    width: 100%;
    height: 80px;
    padding: 0 20px;
    display: flex;
    position: sticky;
    top: 0;
    z-index: 100;
    box-shadow: ${(props) => props.theme.shadowMd};
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
        margin-left: 48px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;

        hr{
            display: none;
        }
    }
`

export const HeaderLink = styled(Link)`
    display: flex;
    align-items: center;
    gap: 8px;
    position: relative;
    color: ${props => props.$isActive ? '#fff' : props.theme.lightGray};
    background-color: ${props => props.$isActive ? props.theme.purple : 'transparent'};
    text-decoration: none;
    font-size: 15px;
    font-weight: 600;
    padding: 8px 18px;
    border-radius: ${(props) => props.theme.radiusPill};
    transition: ${(props) => props.theme.transition};

    &:hover{
        color: #fff;
        background-color: ${props => props.$isActive ? props.theme.purple : 'rgba(255,255,255,0.08)'};
    }
`

export const CartBadge = styled.span`
    position: absolute;
    top: -6px;
    right: -6px;
    min-width: 18px;
    height: 18px;
    padding: 0 4px;
    border-radius: ${(props) => props.theme.radiusPill};
    background-color: ${(props) => props.theme.orange};
    color: #fff;
    font-size: 11px;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: cartBadgePop 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);

    @keyframes cartBadgePop {
        0% { transform: scale(0); }
        70% { transform: scale(1.25); }
        100% { transform: scale(1); }
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
    color: ${(props) => props.theme.orange};
    text-decoration: none;
    font-size: 13px;
    font-weight: 600;
    background-color: transparent;
    border: none;
    padding: 0;
    transition: ${(props) => props.theme.transition};

    &:hover{
        color: ${(props) => props.theme.darkOrange};
        text-decoration: underline;
    }
`