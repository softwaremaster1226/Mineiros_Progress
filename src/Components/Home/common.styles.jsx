import styled from "styled-components";
export const RedButton = styled.button`
  background-color: #f22751;
  border-radius: 3px;
  border-color: #f22751;
  border-width: 1px;
  color: white;
  padding: 10px 30px;
`;

export const TransButton = styled.button`
  background-color: transparent;
  border-radius: 5px;
  border-width: 1px;
  border-color: #f22751;
  color: #f22751;
  padding: 10px 30px;
`;

export const ImgCard = styled.img`
  width: 228px;
  height: 228px;
  padding: 70px 20px;
  align-items: center;
  &:hover {
    border: 2px solid red;
    border-radius: 10px;
  }
`;
export const RedText = styled.span`
  color: #f22751;
`;
