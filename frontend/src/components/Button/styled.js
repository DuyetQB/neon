import styled, { css } from "styled-components";

export const WrapButton = styled.div`
  display: flex;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius.base};
  ${({ isBorder }) =>
    isBorder &&
    css`
      border: 1px solid ${({ theme }) => theme.colors.grey1};
    `}

  ${({ textCenter }) =>
    textCenter &&
    css`
      justify-content: center;
      align-items: center;
      text-align: center;
    `}
    ${({ mt }) =>
    mt &&
    css`
      margin-top: ${mt};
    `}
`;
export const Button = styled.button`
  padding: 0.5em 0em;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.base};
  outline: none;
  color: ${({ theme }) => theme.colors.black};
  background: ${({ theme }) => theme.colors.white1};

  ${({ isHover }) =>
    isHover &&
    css`
      &:hover {
        box-shadow: ${({ theme }) => theme.boxShadow.buttonBox};
        transition: all 0.2s ease-in-out;
      }
    `}

  ${({ isBlue }) =>
    isBlue &&
    css`
      color: ${({ theme }) => theme.colors.white1};
      background: ${({ theme }) => theme.colors.blue1};
    `}

    ${({ isGreen }) =>
    isGreen &&
    css`
      color: ${({ theme }) => theme.colors.white1};
      background: ${({ theme }) => theme.colors.greenSky1};
    `}
    ${({ isWhite }) =>
    isWhite &&
    css`
      color: ${({ theme }) => theme.colors.black};
      background: ${({ theme }) => theme.colors.white1};
      border: 1px solid ${({ theme }) => theme.colors.grey1};
    `}
    ${({ Radius }) =>
    Radius &&
    css`
      border-radius: ${({ theme }) => theme.borderRadius.large};
    `}

  ${({ textCenter }) =>
    textCenter &&
    css`
      width: 100%;
    `}

    ${({ padding }) =>
    padding &&
    css`
      padding: ${padding};
    `}
  ${({ margin }) =>
    margin &&
    css`
      margin: ${margin};
    `}
    ${({ minWidth }) =>
    minWidth &&
    css`
      min-width: ${minWidth};
    `}
    ${({ maxWidth }) =>
    maxWidth &&
    css`
      max-width: ${maxWidth};
    `}
`;

export const ImgIcon = styled.img`
  padding: 10px;
  object-fit: contain;
`;
