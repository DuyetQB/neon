const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return { ...state };
      break;
    default:
      return new Error("bi loi");
  }
};

export { reducer };
