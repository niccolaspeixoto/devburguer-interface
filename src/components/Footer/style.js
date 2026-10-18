import styled from "styled-components";

export const Container = styled.footer`
    background-color: ${(props) => props.theme.darkPurple};
    color: ${(props) => props.theme.white};
    text-align: center;
    padding: 20px;

    height: 60px;
    width: 100%;
    position: fixed;
    bottom: 0px;
`;