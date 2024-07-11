import React, { useLayoutEffect, useState } from "react";
import { BrowserRouterProps, Router } from "react-router-dom";
import { BrowserHistory } from "history";

interface IPros extends BrowserRouterProps {
  history: BrowserHistory;
}

const CustomRouter = ({ basename, history, children }: IPros) => {
  const [state, setState] = useState({
    action: history.action,
    location: history.location,
  });

  useLayoutEffect(() => history.listen(setState), [history]);

  return (
    <Router
      location={state.location}
      navigator={history}
      navigationType={state.action}
      children={children}
      basename={basename}
    />
  );
};

export default CustomRouter;
