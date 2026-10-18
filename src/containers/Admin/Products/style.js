import styled from 'styled-components';


export const Container = styled.div`
  display: flex;
  
`

export const ProductImage = styled.img`
  width: 100px;
  object-fit: cover;
  border-radius: 8px;
  background-color: #e9e6e6;
`

export const EditButton = styled.button`
  border: 0;
  background-color: ${(props) => props.theme.darkWhite};
  border: none;
  cursor: pointer;
  height: 30px;
  width: 30px;
  border-radius: 8px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s ease;

  svg{
    width: 20px;
    height: 20px;
  }

  &:hover {
    background-color: ${(props) => props.theme.purple};
    color: ${(props) => props.theme.white};
  }
`

