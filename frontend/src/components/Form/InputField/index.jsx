import React from "react";
import * as S from "./styled";
export default function Input({ error, name, register = () => {}, ...rest }) {
  return (
    <>
      <S.Input name={name} $error={error} {...register(name)} {...rest} />
      <S.Error>{error}</S.Error>
    </>
  );
}
