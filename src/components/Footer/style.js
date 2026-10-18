import styled from "styled-components";

export const Container = styled.footer`
    background: ${(props) => props.theme.gradientBrand};
    color: ${(props) => props.theme.white};
    text-align: center;
    padding: 20px;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0.2px;

    width: 100%;
`;