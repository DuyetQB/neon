import React, { useState } from "react";
import * as S from "./styled";
export default function PasswordInput({
  error,
  name,
  register = () => {},
  ...rest
}) {
  const [isShow, setIsShow] = useState(false);

  const handleShowEyes = () => {
    setIsShow(!isShow);
  };
  return (
    <S.WrapInputPassword {...rest}>
      <S.Input
        name={name}
        $error={error}
        type={isShow ? "text" : "password"}
        {...register(name)}
        {...rest}
      />

      <S.WrapEyes onClick={handleShowEyes}>
        {isShow ? (
          <i className="far fa-eye"></i>
        ) : (
          <i className="far fa-eye-slash"></i>
        )}
      </S.WrapEyes>
      <S.Error>{error}</S.Error>
    </S.WrapInputPassword>
  );
}
