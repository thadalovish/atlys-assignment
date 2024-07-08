import { routerMiddleware } from "connected-react-router";
import { createBrowserHistory, History } from "history";
import { applyMiddleware, compose, createStore } from "redux";
import createRootReducer from "modules";
import { thunk } from "redux-thunk";

const history: History = createBrowserHistory();
const rootReducer = createRootReducer(history);

export const configureStore = (initialState = {}) => {
  const middleWares: any[] = [thunk];
  let composeEnhancers = compose;
  return {
    history,
    store: createStore(
      rootReducer,
      initialState,
      composeEnhancers(applyMiddleware(...middleWares))
    ),
  };
};

const { store } = configureStore();
export { store, history, rootReducer };
