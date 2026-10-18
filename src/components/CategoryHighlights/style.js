import styled from 'styled-components'

export const Container = styled.div`
    padding: 40px 40px 20px;
    max-width: 1280px;
    margin: 0 auto;

    @media (max-width: 640px){
        padding: 24px 24px 10px;
    }
`

export const Title = styled.h2`
    font-size: 30px;
    font-weight: 800;
    color: ${(props) => props.theme.mainBlack};
    padding-bottom: 12px;
    margin-bottom: 56px;
    position: relative;
    text-align: center;

    &::after{
        content: '';
        position: absolute;
        bottom: 0;
        left: calc(50% - 28px);
        width: 56px;
        height: 4px;
        border-radius: ${(props) => props.theme.radiusPill};
        background: ${(props) => props.theme.gradientBrand};
    }
`

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 60px 32px;
    justify-items: center;

    @media (max-width: 860px){
        grid-template-columns: 1fr;
        max-width: 320px;
        margin: 0 auto;
        gap: 56px;
    }
`

export const Slot = styled.div`
    position: relative;
    width: 100%;
`

export const Tag = styled.span`
    position: absolute;
    top: -18px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 3;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: ${(props) => props.theme.gradientCta};
    color: #fff;
    font-size: 12px;
    font-weight: 700;
    padding: 6px 16px;
    border-radius: ${(props) => props.theme.radiusPill};
    box-shadow: ${(props) => props.theme.shadowSm};
    white-space: nowrap;
`
