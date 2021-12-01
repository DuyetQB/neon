import styled from "styled-components";
import { media } from "styles/breakPoint";
export const WrapHowToOrder = styled.div`
  padding: 20px 0px;
`;
export const WrapText = styled.div`
  padding: 20px 0px;
  text-align: center;
`;
export const WrapImage = styled.div`
  text-align: center;
  padding-top: 40px;
`;
export const ImageItem = styled.div`
  position: relative;
  padding: 0px 30px;
  ${media.phone`
  padding: 30px 30px;
  `}
  & img {
    width: 80px;
    height: 80px;
    z-index: 2;
  }
`;

export const FloatImageChervonRight = styled.div`
  position: absolute;
  right: -50px;
  top: 100px;
  }
`;

export const ImageChervonRight = styled.img`
  z-index: 1 !important;
  ${media.phone`
  display:none;
  `}
`;

export const CircleNumber = styled.div`
  width: 50px;
  height: 50px;
  margin-top: 40px;
  border-radius: ${({ theme }) => theme.borderRadius.xxl};
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px dotted ${({ theme }) => theme.colors.yellow1};
`;
