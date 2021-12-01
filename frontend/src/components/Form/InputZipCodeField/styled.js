import styled, { css } from "styled-components";

export const Input = styled.input`
  width: 100%;
  padding: 1em;
  border-radius: ${({ theme }) => theme.borderRadius.large};
  border: 1px solid ${({ theme }) => theme.colors.grey1};
  ${({ padding }) =>
    padding &&
    css`
      padding: ${padding};
    `}
`;

export const WrapInputZip = styled.div`
  position: relative;
  ${({ margin }) =>
    margin &&
    css`
      margin: ${margin};
    `}
`;

export const WrapBtn = styled.div`
  position: absolute;
  right: 10px;
  cursor: pointer;
  top: 50%;
  transform: translateY(-50%);
`;

export const Btn = styled.div`
  display: flex;
  align-items: center;
  border-radius: ${({ theme }) => theme.borderRadius.large};
  background: ${({ theme }) => theme.colors.blue1};
  padding: 10px 15px;
  color: ${({ theme }) => theme.colors.white1};
  cursor: pointer;
`;

export const Circle = styled.div`
  margin-left: 10px;
  border-radius: ${({ theme }) => theme.borderRadius.xxl};
  background: ${({ theme }) => theme.colors.white1};
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  & i {
    color: ${({ theme }) => theme.colors.blue1};
    font-size: ${({ theme }) => theme.fontSize.sm};
  }
  ${({ isWhite }) =>
    isWhite &&
    css`
      background: ${({ theme }) => theme.colors.white1};
    `}
  ${({ isBlue }) =>
    isBlue &&
    css`
      background: ${({ theme }) => theme.colors.blue1};
    `}
`;
