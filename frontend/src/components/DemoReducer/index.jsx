import React, { useReducer } from "react";

const initState = 0;
const ACTION_INCREE = "up";
const ACTION_DOWN = "down";

const reducer = (state, action) => {
  console.log("state", state);
  switch (action.type) {
    case "up":
      return ++state;
      break;
    case "down":
      return --state;
      break;
    default:
      return new Error("this is invalid");
  }
};

export default function DemoReducer() {
  const [list, dispatch] = useReducer(reducer, initState);

  return (
    <div>
      <h2>{list}</h2>
      <button onClick={() => dispatch({ type: ACTION_INCREE })}>incree</button>
      <button onClick={() => dispatch({ type: ACTION_DOWN })}>down</button>
    </div>
  );
}
