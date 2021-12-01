import styled from "styled-components";

export const Input = styled.input`
  width: 100%;
  padding: 0.5em 0em;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey1};
`;

export const WrapInputPassword = styled.div`
  position: relative;
`;

export const WrapEyes = styled.div`
  position: absolute;
  right: 0px;
  cursor: pointer;
  top: 50%;
  transform: translateY(-50%);
`;

export const Error = styled.span`
  padding: 2em;
  color: ${({ theme }) => theme.colors.red};
`;
