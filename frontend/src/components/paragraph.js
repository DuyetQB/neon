import React, { useContext } from "react";

import { ContextTheme } from "./context";

const Paragraph = () => {
  const theme = useContext(ContextTheme);

  return (
    <div>
      <p className={theme.theme}>dinh si Duyet yeu em rat nhieu</p>
    </div>
  );
};

export default Paragraph;
