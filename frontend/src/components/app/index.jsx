import React, { Component} from 'react';
import {hot} from "react-hot-loader";
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import CustomAppBar from '../appBar';
import HomePage from '../homepage';
import ProductsPage from '../products_page';
import AboutUsPage from '../about_us_page';

const theme = createMuiTheme(
  {
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

const App = () =>
  (
    <ThemeProvider theme={theme}>

      <BrowserRouter>
            <div>
              < CustomAppBar />
              <Switch>
                <Route exact path="/">
                  <HomePage />
                </Route>
                <Route path="/products">
                  <ProductsPage />
                </Route>
                <Route path="/contact-us">
                  <AboutUsPage />
                </Route>
              </Switch>
            </div>
      </BrowserRouter>
    </ThemeProvider>
  );

export default hot(module)(App);
