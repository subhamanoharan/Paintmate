import React, { Component} from 'react';
import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider'

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import AppBar from '../appBar';
import Carousel from '../carousel';
import ProsList from '../prosList';

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

export default class HomePage extends Component {

  render(){
    return (
      <ThemeProvider theme={theme}>
        <Grid container direction="column" wrap="nowrap" spacing={1} style={{margin: '0px'}}>
          <Grid item>
            <AppBar />
          </Grid>
          <Grid item>
            <Divider variant="fullWidth" style={{height: '2vh', backgroundColor: "black"}}/>
            <ProsList />
            <Divider/>
          </Grid>
          <Grid item>
            <Carousel />
          </Grid>
        </Grid>
      </ThemeProvider>
    );
  }
}
