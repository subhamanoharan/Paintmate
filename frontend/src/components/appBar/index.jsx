import React, { Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider'

import ProsList from '../prosList';

export default class CustomAppBar extends Component {

  render(){
    return (
      <AppBar position="static" style={{"boxShadow": "none"}}>
        <Toolbar disableGutters={true}>
          <Grid container direction="column">
            <Grid item>
              <Typography variant="h6" >
                Paintmate
              </Typography>
            </Grid>
            <Grid item style={{display: "contents"}}>
              <Divider />
              <ProsList />
              <Divider/>
            </Grid>
           </Grid>
        </Toolbar>
      </AppBar>
    );
  }
}
