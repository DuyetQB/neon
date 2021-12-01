import React from "react";
import * as S from "./styled";
const Heading1 = ({ padding, margin, size, children, ...rest }) => {
  return (
    <S.Heading1 padding={padding} margin={margin} size={size} {...rest}>
      {" "}
      {children}
    </S.Heading1>
  );
};

const Heading2 = ({ padding, margin, size, children, ...rest }) => {
  return (
    <S.Heading2 padding={padding} margin={margin} size={size} {...rest}>
      {children}
    </S.Heading2>
  );
};
const Heading3 = ({ padding, margin, size, children, ...rest }) => {
  return (
    <S.Heading3 padding={padding} margin={margin} size={size} {...rest}>
      {children}
    </S.Heading3>
  );
};
const Text = ({ padding, margin, children, ...rest }) => {
  return (
    <S.Text padding={padding} margin={margin} {...rest}>
      {children}
    </S.Text>
  );
};

export { Heading1, Heading2, Heading3, Text };
