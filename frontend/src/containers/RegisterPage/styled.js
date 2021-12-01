import styled from "styled-components";
import { media } from "styles/breakPoint";
export const Wrapper = styled.div`
  padding: 14px 30px 30px 90px;
  background: ${({ theme }) => theme.colors.white1};
  border-radius: 30px 0px 0px 30px;
  height: 100vh;
  ${media.phone`
  padding: 14px 30px 30px 30px;
  border-radius: 0px 0px 0px 0px;
  `}
`;

export const WrapperFloat = styled.div`
  position: relative;

  background: ${({ theme }) => theme.colors.greenSky2};
`;

export const Background = styled.div`
  background: ${({ theme }) => theme.colors.greenSky2};
`;

export const ImgFloat = styled.img`
  position: absolute;
  top: 70px;
  right: -70px;
`;

export const BoxCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 35px;
  text-transform: uppercase;
`;

export const BoxSelect = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
`;
export const BoxSelectFloat = styled.div`
  position: absolute;
  width: 200px;
  right: 60px;
  top: 80px;
  background: ${({ theme }) => theme.colors.white1};
  padding: 20px;
  border: 0.4px solid ${({ theme }) => theme.colors.greenSky2};
  border-radius: ${({ theme }) => theme.borderRadius.base};
  box-shadow: ${({ theme }) => theme.boxShadow.buttonBox};
`;

export const BoxPointer = styled.div`
  cursor: pointer;

  & span {
    user-select: none;
    &:hover {
      color: ${({ theme }) => theme.colors.greenSky1};
    }
  }
`;
