import React, { useReducer } from "react";
import { ADD_TO_CART } from "./action";
import { reducer } from "./constant";
const initState = [];

export default function Reducer() {
  const [valueStore, dispatch] = useReducer(reducer, initState);
  return (
    <div>
      {valueStore}

      <button></button>
    </div>
  );
}
