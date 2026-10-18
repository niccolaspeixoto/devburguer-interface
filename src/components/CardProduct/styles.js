import styled from "styled-components"; 

export const Container = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    padding: 84px 20px 20px;
    border-radius: ${(props) => props.theme.radiusLg};
    background-color: ${(props) => props.theme.surface};
    border: 1px solid ${(props) => props.theme.border};
    box-shadow: ${(props) => props.theme.shadowSm};
    transition: ${(props) => props.theme.transition};
    position: relative;
    margin-top: 50px;

    &:hover{
        transform: translateY(-6px);
        box-shadow: ${(props) => props.theme.shadowLg};
    }

    div{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 6px;
        text-align: center;

        p{
            font-size: 16px;
            color: ${(props) => props.theme.secondBlack};
            line-height: 20px;
            font-weight: 600;
        }

        strong{
            font-size: 22px;
            color: ${(props) => props.theme.orange};
            font-weight: 800;
            line-height: 20px;
        }
    }
`

export const CardImage = styled.img `
    height: 120px;
    width: 120px;
    object-fit: contain;
    position: absolute;
    top: -48px;
    left: 50%;
    transform: translateX(-50%);
    filter: drop-shadow(0 12px 16px rgba(0,0,0,0.25));
`