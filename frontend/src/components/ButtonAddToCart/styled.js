import styled, { keyframes } from "styled-components";

export const slice = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(10);
    opacity: 0.375;
  }
  100% {
    transform: scale(35);
    opacity: 0;
  }
`;

export const AddToCart = styled.button`
  border-radius: 4px;
  border: none;
  margin: 8px;
  padding: 14px 24px;
  background: ${({ theme }) => theme.colors.blue3};
  color: ${({ theme }) => theme.colors.white1};
  overflow: hidden;
  position: relative;
  cursor: pointer;
  ${
    "" /* position: relative;
  padding: 10px 20px;
  background: ${({ theme }) => theme.colors.blue2};
  color: ${({ theme }) => theme.colors.white1};
  border-radius: ${({ theme }) => theme.borderRadius.base};
  backdrop-filter: blur(8px); */
  }
  
    &:hover {
    box-shadow: ${({ theme }) => theme.boxShadow.buttonBox};
  } 
  }

  & .bubble-pointer {
    width: 20px;
    height: 20px;
    position: absolute;
    background: #63a4ff;
    display: block;
    content: "";
    border-radius: 9999px;
    opacity: 1;
    animation: 0.9s ease 1 forwards ${slice};
  }
`;
