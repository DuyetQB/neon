import React from "react";
import * as S from "./styled";
export default function ButtonArrow({ btntext, ...rest }) {
  return (
    <>
      <S.WrapBtn {...rest}>
        <S.Btn {...rest}>
          <span>{btntext}</span>
          <S.Circle>
            <i className="fas fa-chevron-right"></i>
          </S.Circle>
        </S.Btn>
      </S.WrapBtn>
    </>
  );
}
