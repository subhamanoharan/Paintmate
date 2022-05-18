import React, { Component} from 'react';
import {hot} from "react-hot-loader";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import CustomAppBar from '../appBar';
import Base from '../base';

const customMonotypeCorsivaRegularFont = 'Monotype Corsiva Regular';

const theme = createMuiTheme(
  {
    typography: {
      fontFamily: [
        "Helvetica Neue",
        "Arial",
        "sans-serif"
      ].join(","),
      h5: {fontSize: '6.5vmin', fontFamily: customMonotypeCorsivaRegularFont},
      h4: { fontSize: '6.2vmin', fontFamily: customMonotypeCorsivaRegularFont },
      h3: { fontSize: '6vmin', fontFamily: customMonotypeCorsivaRegularFont },
      body1: { fontSize: '3.5vmin'},
      body2: { fontSize: '2vmin'},
    },
    palette: {
      primary: {
        light: '#000000',
        main: '#000000',
        dark: '#000000',
        contrastText: '#ffffff'
      },
      secondary: {
        main: '#ffffff',
        light: '#ffffff',
        dark: '#ffffff',
        contrastText: '#000000'
      },
      text: {
        primary: '#ffffff',
        secondary: 'rgba(0, 0, 0, 0.54)',
        disabled:'rgba(0, 0, 0, 0.38)',
        hint:'rgba(0, 0, 0, 0.38)'
      }
    }
  }
);

const App = () =>
  (
    <ThemeProvider theme={theme}>
      < CustomAppBar />
      <Base />
    </ThemeProvider>
  );

export default hot(module)(App);
