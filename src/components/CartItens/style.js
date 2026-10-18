import styled from "styled-components";

export const TableWrapper = styled.div`
    width: 100%;
    overflow-x: auto;

    table{
        min-width: 560px;
    }

    @media (max-width: 680px){
        display: none;
    }
`

export const CardsList = styled.div`
    display: none;
    flex-direction: column;
    gap: 12px;

    @media (max-width: 680px){
        display: flex;
    }
`

export const CardItem = styled.div`
    background-color: ${(props) => props.theme.surface};
    border-radius: ${(props) => props.theme.radiusLg};
    box-shadow: ${(props) => props.theme.shadowSm};
    padding: 14px;
    display: flex;
    flex-direction: column;
    gap: 12px;
`

export const CardTop = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
`

export const CardInfo = styled.div`
    flex: 1;
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: 4px;

    strong{
        font-size: 14px;
        color: ${(props) => props.theme.secondBlack};
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    span{
        font-size: 13px;
        color: ${(props) => props.theme.textMuted};
    }
`

export const CardBottom = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 12px;
    border-top: 1px dashed ${(props) => props.theme.border};
`

export const CardTotal = styled.span`
    font-weight: 700;
    color: ${(props) => props.theme.orange};
    font-size: 15px;
`

export const ProductImage = styled.img`
    height: 64px;
    width: 64px;
    flex-shrink: 0;
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
    flex-shrink: 0;
    cursor: pointer;
    opacity: 0.6;
    transition: ${(props) => props.theme.transition};

    &:hover{
        opacity: 1;
    }
`

