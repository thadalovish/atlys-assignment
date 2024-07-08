import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import reportWebVitals from "reportWebVitals";
import { store, history } from "store";
import App from "App";
import IndexWrapper from "components/IndexWrapper";
import ThemeContextProvider from "context/theme";
import CustomRouter from "router/CustomRouter";
import AuthContextProvider from "context/auth";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <IndexWrapper>
        <ThemeContextProvider>
          <CustomRouter history={history}>
            <AuthContextProvider>
              <App />
            </AuthContextProvider>
          </CustomRouter>
        </ThemeContextProvider>
      </IndexWrapper>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
