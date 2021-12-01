import React from "react";
import * as S from "./styled";

function Button({ $icon: Icon, children, ...rest }) {
  if (Icon) {
    return (
      <S.WrapButton {...rest}>
        <S.ImgIcon src={Icon} alt="" />
        <S.Button {...rest}>{children}</S.Button>
      </S.WrapButton>
    );
  }

  return (
    <S.WrapButton>
      <S.Button {...rest}>{children}</S.Button>
    </S.WrapButton>
  );
}

export default Button;
