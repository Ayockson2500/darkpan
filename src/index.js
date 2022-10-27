import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import StyledThemeProvider from "./theme";

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <StyledThemeProvider>
     <App />
    </StyledThemeProvider>
)