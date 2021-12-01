import styled from "styled-components";

export const WrapBanner = styled.div`
  padding: 50px 0px;
`;
export const WrapText = styled.div`
  padding: 20px 60px 20px 20px;
`;
export const WrapImage = styled.div``;

export const CircleNumber = styled.div`
  width: 30px;
  height: 30px;
  margin-right: 10px;
  border-radius: ${({ theme }) => theme.borderRadius.xxl};
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px dotted ${({ theme }) => theme.colors.yellow1};
`;

export const WrapFlex = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0px;
  text-transform: capitalize;
`;
export const ImageStore = styled.img`
  margin: 10px;
  width: 100px;
`;
