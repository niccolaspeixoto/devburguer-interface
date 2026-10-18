import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-color: ${props => props.theme.mainBlack};
    border-right: 1px solid rgba(255,255,255,0.06);

    img{
        width: 55%;
        margin: 40px 0;
    }

`
export const NavLinkContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 4px;
    padding: 0 16px;
`
export const NavLink = styled(Link)`
    display: flex;
    align-items: center;
    padding: 12px 16px;
    gap: 12px;
    border-radius: ${(props) => props.theme.radiusMd};
    text-decoration: none;
    font-size: 15px;
    font-weight: 500;
    color: ${(props) => (props.$isActive ? '#fff' : props.theme.lightGray)};
    background: ${(props) => (props.$isActive ? props.theme.gradientBrand : 'transparent')};
    box-shadow: ${(props) => (props.$isActive ? props.theme.shadowSm : 'none')};
    transition: ${(props) => props.theme.transition};

    svg{
        width: 20px;
        height: 20px;
    }

    &:hover{
       color: #fff;
       background: ${props => props.$isActive ? props.theme.gradientBrand : 'rgba(255,255,255,0.06)'};
    }
`



export const Footer = styled.footer`
    width: 100%;
    margin-top: auto;
    padding: 16px;
    border-top: 1px solid rgba(255,255,255,0.06);
`