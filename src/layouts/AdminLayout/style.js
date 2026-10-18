import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: minmax(220px, 280px) 1fr;

    main{
        display: flex;
        flex-direction: column;
        flex: 1;
        width: 100%;
        height: 100vh;
        background-color: ${props => props.theme.bg};
        overflow-y: auto;
    }

    section{
        margin: 0 auto;
        padding: 40px;
        max-width: 1200px;
        width: 100%;
    }

    @media (max-width: 900px){
        grid-template-columns: 1fr;

        section{
            padding: 24px 16px;
        }
    }
`

export const MobileTopBar = styled.div`
    display: none;

    @media (max-width: 900px){
        display: flex;
        align-items: center;
        gap: 12px;
        height: 60px;
        padding: 0 16px;
        flex-shrink: 0;
        background-color: ${props => props.theme.mainBlack};
        position: sticky;
        top: 0;
        z-index: 150;

        img{
            height: 28px;
        }
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