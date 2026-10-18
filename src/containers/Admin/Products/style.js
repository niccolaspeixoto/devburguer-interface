import styled from 'styled-components';


export const Container = styled.div`
  display: flex;

  .MuiPaper-root{
    width: 100%;
    border-radius: ${(props) => props.theme.radiusLg} !important;
    box-shadow: ${(props) => props.theme.shadowSm} !important;
  }

  .MuiTableCell-head{
    font-weight: 700;
    background-color: ${(props) => props.theme.secondWhite};
  }
`

export const ProductImage = styled.img`
  width: 64px;
  height: 64px;
  object-fit: cover;
  border-radius: ${(props) => props.theme.radiusMd};
  background-color: #e9e6e6;
`

export const EditButton = styled.button`
  border: 0;
  background-color: ${(props) => props.theme.darkWhite};
  cursor: pointer;
  height: 34px;
  width: 34px;
  border-radius: ${(props) => props.theme.radiusMd};
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;
  transition: ${(props) => props.theme.transition};

  svg{
    width: 18px;
    height: 18px;
  }

  &:hover {
    background: ${(props) => props.theme.gradientBrand};
    color: ${(props) => props.theme.white};
    transform: translateY(-1px);
  }
`

