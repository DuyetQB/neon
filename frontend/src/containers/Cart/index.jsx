import React, { useState } from "react";
import * as S from "./styled";

export default function Cart() {
  const [isShow, setIsShow] = useState(false);
  const handleShow = () => {
    setIsShow(!isShow);
  };
  return (
    <>
      <S.CartIconFloat onClick={() => handleShow()}>
        <i className="fas fa-bars"></i>
        {isShow && (
          <S.Lists>
            <li>
              <S.Link to="/login">Login</S.Link>
            </li>
            <li>
              <S.Link to="/register">Sign Up</S.Link>
            </li>
          </S.Lists>
        )}
      </S.CartIconFloat>
    </>
  );
}
