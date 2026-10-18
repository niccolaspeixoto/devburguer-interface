import styled from 'styled-components'

export const Container = styled.div`
    .carousel-item{
        padding-right: 40px;
    }
    overflow-x: hidden;

    .react-multi-carousel-list{
        overflow: visible;
    }

    padding-left: 40px;
    padding-bottom: 40px;
`

export const Title = styled.h2`
    font-size: 30px;
    font-weight: 800;
    color: ${(props) => props.theme.mainBlack};
    padding-bottom: 12px;
    margin-bottom: 60px;
    padding-top: 60px;
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
        background: ${(props) => props.theme.gradientCta};

    }
`

