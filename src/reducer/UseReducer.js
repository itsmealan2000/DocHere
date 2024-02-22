//login status
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

//get useremail
export const userEmail = localStorage.getItem("useremail")

export const useremailreducer = (state, action) => {
  switch (action.type) {
    case "USEREMAIL":
      localStorage.setItem("useremail", action.payload);
      return action.payload;
    default:
      return state;
  }
}

//username
export const userNames = localStorage.getItem("username");

export const usernameReducer = (state, action) => {
  switch (action.type) {
    case "USERNAME":
      localStorage.setItem("username", action.payload);
      return action.payload;
    default:
      return state;
  }
}
