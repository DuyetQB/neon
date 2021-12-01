import React from "react";
import { useState, createContext } from "react";
const payloadData = createContext();
function ContextCart({ chilren }) {
  const [value, setValue] = useState();
  const handleSubmit = (payload) => {
    setValue(payload);
  };
  const objectData = {
    value,
    handleSubmit,
  };
  return (
    <div>
      <payloadData.Provider value={objectData}>{chilren}</payloadData.Provider>
    </div>
  );
}

export { payloadData, ContextCart };
