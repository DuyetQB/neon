import React from "react";
import * as S from "./styled";
export default function AppLayout({ children }) {
  return (
    <S.AppLayout>
      <S.Content>{children}</S.Content>
    </S.AppLayout>
  );
}
