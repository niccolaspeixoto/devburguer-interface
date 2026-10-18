import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
    background-color: ${(props) => props.theme.mainBlack};
    width: 100%;
    min-height: 80px;
    padding: 12px 20px;
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
    gap: 12px;
    padding: 0 20px;

    @media (max-width: 720px){
        display: none;
    }
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
        flex-wrap: wrap;
        gap: 8px;

        hr{
            display: none;
        }
    }
`

export const MobileBar = styled.div`
    display: none;
    width: 100%;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 720px){
        display: flex;
    }
`

export const MenuButton = styled.button`
    background: transparent;
    border: none;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Overlay = styled.div`
    display: none;

    @media (max-width: 720px){
        display: ${props => props.$isOpen ? 'block' : 'none'};
        position: fixed;
        top: 80px;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0,0,0,0.55);
        z-index: 90;
    }
`

export const MobileMenu = styled.div`
    display: none;

    @media (max-width: 720px){
        display: flex;
        flex-direction: column;
        align-items: stretch;
        gap: 16px;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background-color: ${(props) => props.theme.mainBlack};
        padding: 24px 20px;
        box-shadow: ${(props) => props.theme.shadowLg};
        z-index: 95;
        transform-origin: top center;
        transform: ${props => props.$isOpen ? 'scaleY(1)' : 'scaleY(0)'};
        opacity: ${props => props.$isOpen ? '1' : '0'};
        pointer-events: ${props => props.$isOpen ? 'auto' : 'none'};
        transition: transform 0.25s ease, opacity 0.2s ease;
    }
`

export const MobileMenuHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

export const MobileNavLink = styled(Link)`
    display: flex;
    align-items: center;
    gap: 12px;
    color: ${props => props.$isActive ? '#fff' : props.theme.lightGray};
    background-color: ${props => props.$isActive ? props.theme.purple : 'transparent'};
    text-decoration: none;
    font-size: 17px;
    font-weight: 600;
    padding: 14px 16px;
    border-radius: ${(props) => props.theme.radiusMd};
    transition: ${(props) => props.theme.transition};
`

export const MobileProfile = styled.div`
    display: flex;
    align-items: center;
    gap: 14px;
    padding: 14px 16px;
    border-radius: ${(props) => props.theme.radiusMd};
    background-color: rgba(255,255,255,0.05);

    p{
        color: ${(props) => props.theme.white};
        font-weight: 300;
        font-size: 15px;

        span{
            font-weight: 800;
            color: ${(props) => props.theme.purple};
        }
    }
`

export const MobileCartLink = styled(Link)`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
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
    justify-content: flex-end;
    gap: 24px;
`

export const Profile = styled.div`
    display: flex;
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