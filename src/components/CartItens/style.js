import styled from "styled-components";

export const ProductImage = styled.img`
    height: 64px;
    width: 64px;
    object-fit: cover;
    border-radius: ${(props) => props.theme.radiusMd};
    box-shadow: ${(props) => props.theme.shadowSm};
`

export const ButtonGroup = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

    button{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 28px;
        width: 28px;
        color: ${(props) => props.theme.white};
        border-radius: ${(props) => props.theme.radiusPill};
        background: ${(props) => props.theme.gradientBrand};
        border: none;
        font-weight: 700;
        transition: ${(props) => props.theme.transition};

        &:hover{
            transform: translateY(-1px);
        }
    }
`

export const EmptyCart = styled.p`
    font-size: 18px;
    text-align: center;
    font-weight: 600;
    color: ${(props) => props.theme.textMuted};
    padding: 24px;
`

export const TotalPrice = styled.p`
    font-weight: 700;
    color: ${(props) => props.theme.orange};
`

export const TrashImage = styled.img`
    height: 20px;
    width: 20px;
    cursor: pointer;
    opacity: 0.6;
    transition: ${(props) => props.theme.transition};

    &:hover{
        opacity: 1;
    }
`

