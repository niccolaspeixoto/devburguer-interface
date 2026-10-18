import styled from "styled-components";

export const Root = styled.table`
    width: 100%;
    border-collapse: collapse;
    background-color: #f9f9f9;
    border-radius: 20px;
`;

export const Header = styled.thead``

export const Tr = styled.tr``

export const Th = styled.th`
    padding: 12px;
    text-align: left;
    color: ${(props) => props.theme.white};
    background-color: ${(props) => props.theme.secondBlack};
    border-bottom: 1px solid ${(props) => props.theme.lightGray};

    &:last-child{ border-top-right-radius:20px ;}
    &:first-child{border-top-left-radius:20px ;}
`

export const Td = styled.td`
    padding: 12px;
    color: ${(props) => props.theme.secondBlack};
    font-weight: 400;
    line-height: 115%;
`

export const Body = styled.tbody`
    
`