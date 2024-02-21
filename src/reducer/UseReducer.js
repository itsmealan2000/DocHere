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

//get doctor name
export const doctorName = localStorage.getItem("docname")
export const docnamereducer = (state=doctorName, action) =>
{
  switch (action.type) {
    case "DOCTORNAME":
      localStorage.setItem("docname", action.payload);
      return action.payload;
    default:
      return state;
  }
}