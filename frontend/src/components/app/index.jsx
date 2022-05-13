import React, { Component} from 'react';
import {hot} from "react-hot-loader";
import { createMuiTheme, ThemeProvider, responsiveFontSizes } from '@material-ui/core/styles';

import CustomAppBar from '../appBar';
import Base from '../base';
// import MonotypeCorsivaRegular from '../../fonts/MonotypeCorsiva.ttf';
import MonotypeCorsivaRegular from '../../fonts/MTCORSVA.ttf';

const customMonotypeCorsivaRegularFont = 'Monotype Corsiva Regular';

let theme = createMuiTheme(
  {
    typography: {
      fontFamily: [
        "Helvetica Neue",
        "Arial",
        "sans-serif"
      ].join(","),
      h5: { fontSize: '2.5rem', fontFamily: 'Monotype Corsiva Regular' },
      h4: { fontSize: '2.2rem', fontFamily: 'Monotype Corsiva Regular' },
      h3: { fontSize: '2rem', fontFamily: 'Monotype Corsiva Regular' },
      body1: { fontSize: '1.5rem'},
      body2: { fontSize: '1rem'},
    },
    palette: {
      secondary: {
        light: '#000000',
        main: '#000000',
        dark: '#000000',
        contrastText: '#ffffff'
      },
      primary: {
        main: '#ffffff',
        light: '#ffffff',
        dark: '#ffffff',
        contrastText: '#000000'
      },
      text: {
        primary: '#000000',
        secondary: 'rgba(0, 0, 0, 0.54)',
        disabled:'rgba(0, 0, 0, 0.38)',
        hint:'rgba(0, 0, 0, 0.38)'
      }
    }
  }
);

theme = responsiveFontSizes(theme)
const App = () =>
  (
    <ThemeProvider theme={theme}>
      < CustomAppBar />
      <Base />
    </ThemeProvider>
  );

export default hot(module)(App);
