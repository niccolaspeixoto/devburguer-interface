import styled from "styled-components";

export const Root = styled.table`
    width: 100%;
    border-collapse: separate;
    border-spacing: 0;
    background-color: ${(props) => props.theme.surface};
    border-radius: ${(props) => props.theme.radiusLg};
    box-shadow: ${(props) => props.theme.shadowSm};
    overflow: hidden;
`;

export const Header = styled.thead``

export const Tr = styled.tr`
    &:not(:last-child) td{
        border-bottom: 1px solid ${(props) => props.theme.border};
    }
`

export const Th = styled.th`
    padding: 16px;
    text-align: left;
    font-size: 13px;
    text-transform: uppercase;
    letter-spacing: 0.4px;
    color: ${(props) => props.theme.white};
    background: ${(props) => props.theme.gradientBrand};
`

export const Td = styled.td`
    padding: 16px;
    color: ${(props) => props.theme.secondBlack};
    font-weight: 500;
    line-height: 115%;
`

export const Body = styled.tbody`

`