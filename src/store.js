import { createContext, useContext, useReducer } from "react";

export const Store = createContext();

const initialState = {
  userInfo: {
    userInfo: localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : [],
  },
 
};
function reducer(state, action) {
  switch (action.type) {
   
    case "USER_SIGNIN":
      return { ...state, userInfo: action.payload };

    case "SIGNOUT":
      return {
        ...state,
        userInfo: null
      };

   
    default:
      return state;
  }
}
export default function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children} </Store.Provider>;
}
