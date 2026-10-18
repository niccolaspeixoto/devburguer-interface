import styled from "styled-components";

export const Container = styled.div`
    background-color: ${(props) => props.theme.surface};
    border-radius: ${(props) => props.theme.radiusLg};
    box-shadow: ${(props) => props.theme.shadowSm};
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 20px;

    *{
        color: ${(props) => props.theme.secondBlack};
        font-weight: 500;
    }

    .container-top{
        display: grid;
        grid-gap: 12px 34%;
        grid-template-areas:
        'title title'
        'items items-price'
        'delivery-tax delivery-tax-price';
        padding-bottom: 16px;
    }

    .title{
        grid-area: title;
        font-size: 18px;
        font-weight: 700;
        margin-bottom: 20px;
        text-align: center;
        background: ${(props) => props.theme.gradientBrand};
        color: ${(props) => props.theme.white};
        width: 100%;
        padding: 18px;
    }

    .items{
        grid-area: items;
        padding-left: 20px;
    }

    .items-price{
        grid-area: items-price;
        padding-right: 20px;
    }

    .delivery-tax{
        grid-area: delivery-tax;
        padding-left: 20px;
    }

    .delivery-tax-price{
        grid-area: delivery-tax-price;
        padding-right: 20px;

    }

    .container-bottom{
        display: flex;
        justify-content: space-between;
        padding: 20px;
        font-size: 20px;
        border-top: 1px dashed ${(props) => props.theme.border};

        *{
            font-weight: 800;
            color: ${(props) => props.theme.orange};
        }
    }
`