import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./global-theme";
import theme from "./theme";
import "normalize.css";
import { ExampleProvider } from "./contexts/ExampleContext";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <ExampleProvider>
        <Routes />
      </ExampleProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root"),
);
