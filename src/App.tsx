import React from "react";
// @ts-ignore
import { ThemeProvider } from "styled-components/macro";
import { create } from "jss";

import Route from './route'

import {
  StylesProvider,
  ThemeProvider as MuiThemeProvider,
  jssPreset,
} from "@material-ui/core/styles";

import createTheme from "./theme";

const jss = create({
  ...jssPreset(),
  insertionPoint: document.getElementById("jss-insertion-point")!,
});

function App() {
  return (
      <React.Fragment>
        <StylesProvider jss={jss}>
          <MuiThemeProvider theme={createTheme("DEFAULT")}>
            <ThemeProvider theme={createTheme("DEFAULT")}>
              <Route />
            </ThemeProvider>
          </MuiThemeProvider>
        </StylesProvider>
      </React.Fragment>
  );
}

export default App;
