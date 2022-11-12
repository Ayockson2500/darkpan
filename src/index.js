import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import StyledThemeProvider from "./theme";
import { Provider } from "react-redux";
import { configureStore, compose } from "@reduxjs/toolkit";
import reducers from "./redux/reducers";

const container = document.getElementById("root");
const root = createRoot(container);
const composeEnhencer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = configureStore(
  {reducer: reducers},
  composeEnhencer()
);

root.render(
  <Provider store={store}>
    <StyledThemeProvider>
      <App />
    </StyledThemeProvider>
  </Provider>
);
