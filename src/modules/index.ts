import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
// import { reducer } from "react-redux-toastr";
import { History } from "history";

const appReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    // toastr: reducer,
  });

export default appReducer;
