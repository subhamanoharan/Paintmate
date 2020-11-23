import React, { Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

import ProsList from '../prosList';
import PageNav from '../pageTabNav';
import PiIcon from '../PiIcon'

const customMonotypeCorsivaRegularFont = 'Monotype Corsiva Regular';

const monotypeCorsivaRegularFont = {
  fontFamily: customMonotypeCorsivaRegularFont,
  src: `url('./MonotypeCorsiva.ttf') format('ttf')  `
};

export default class CustomAppBar extends Component {

  render(){
    return (
      <AppBar position="static" style={{"boxShadow": "none"}}>
        <Toolbar disableGutters={true}>
          <Grid container direction="column">
            <Grid item style={{background: 'black'}}>
              <PiIcon />
              <Typography variant="h3" style={{textAlign: 'center', fontFamily: `${customMonotypeCorsivaRegularFont}, Arial`, color: 'white'}}>
                Paintmate
              </Typography>
            </Grid>
            <Grid item style={{display: "contents"}}>
              <Divider/>
              <ProsList />
              <Divider/>
            </Grid>
            <Grid item>
              <PageNav />
            </Grid>
           </Grid>
        </Toolbar>
      </AppBar>
    );
  }
}
