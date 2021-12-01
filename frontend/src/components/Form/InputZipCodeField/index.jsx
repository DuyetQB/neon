import React from "react";
import * as S from "./styled";
import ButtonArrow from "components/ButtonArrow";
export default function InputZipCode({ margin, btntext, ...rest }) {
  return (
    <S.WrapInputZip margin={margin}>
      <S.Input {...rest} />
      <ButtonArrow btntext={btntext} />
    </S.WrapInputZip>
  );
}
