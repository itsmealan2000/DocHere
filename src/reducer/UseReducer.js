export const initialState = localStorage.getItem("user") === "true" ? true : false;

export const reducer = (state, action) => {
  switch (action.type) {
    case "USER":
      localStorage.setItem("user", action.payload);
      return action.payload;
    default:
      return state;
  }
};
