import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
// import { reducer } from "react-redux-toastr";
import { History } from "history";

// need in future if want some handle states using across platform
const appReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    // toastr: reducer,
  });

export default appReducer;
